import { Server } from "socket.io";
import http from "http";
import crypto from "crypto";

import { prisma } from "./prisma.js";

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//storages
let rooms = {}
const socketToUser = new Map(); // socket --> userId
const userToRoom = new Map(); // userId --> roomId
const userToSockets = new Map(); // userId --> [socket1, socket2, ...]

const disconnectTimers = new Map();

function addToUserToSockets(key, value) {
  if (!userToSockets.has(key)) {
    userToSockets.set(key, []);
  }
  userToSockets.get(key).push(value);
}

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  //host creating room
  socket.on("create-room", (name) => {
    const userId = crypto.randomUUID();
    addToUserToSockets(userId, socket.id);
    socketToUser.set(socket.id, userId);

    const roomId = crypto.randomBytes(8).toString("hex");

    rooms[roomId] = {
      host: userId,
      players: [{ id: userId, name: name }],
      status: "waiting",
    }

    userToRoom.set(userId, roomId);
    socket.join(roomId);
    socket.emit("room-created", roomId, userId);
  })

  //player joining room for the first time
  socket.on("join-room", (name, roomId) => {
    if (rooms[roomId] === false) {
      socket.emit("room-not-found");
      return;
    }

    const userId = crypto.randomUUID();

    socket.join(roomId);
    addToUserToSockets(userId, socket.id);
    socketToUser.set(socket.id, userId);
    userToRoom.set(userId, roomId);

    rooms[roomId].players.push({
      id: userId,
      name,
    });

    socket.emit("joined-room", userId)
  });

  socket.on("get-players-data", async (userId, roomId, callback) => {
    const room = rooms[roomId];

    if (!room || !room.players.find(p => p.id === userId)) {
      callback({ success: false });
      return;
    }

    if (rooms[roomId].status === "progressing") {
      const problem = await prisma.problem.findUnique({
        where: {
          id: rooms[roomId].problemId
        }
      })
      const currTime = Date.now();
      callback({
        success: true,
        players: rooms[roomId].players,
        host: rooms[roomId].host,
        started: true,
        serverTime: currTime,
        endTime: rooms[roomId].endTime,
        problem
      })

    } else {
      callback({
        success: true,
        players: rooms[roomId].players,
        host: rooms[roomId].host,
        started: false,
      })
    }
  })

  //starting contest
  socket.on("start-contest", async (roomId) => {
    const count = await prisma.problem.count();
    const randomNumber = Math.floor(Math.random() * count);
    const problem = await prisma.problem.findFirst({
      skip: randomNumber,
      include: {
        testCases: {
          where: {
            isHidden: false,
          },
        },
      },
    });

    //timers
    const currTime = Date.now();
    const duration = 1 * 60 * 1000;
    const endTime = currTime + duration;

    rooms[roomId].status = "progressing";
    rooms[roomId].endTime = endTime;
    rooms[roomId].problemId = problem.id
    rooms[roomId].results = [];
    io.to(roomId).emit("contest-started", { problem, endTime, serverTime: currTime });

    const timerId = setTimeout(() => {
      if (rooms[roomId] && rooms[roomId].status === "progressing") {
        rooms[roomId].status = "finished";

        rooms[roomId].players.forEach(player => {
          if (!rooms[roomId].results.find(r => r.userId === player.id)) {
            rooms[roomId].results.push({
              userId: player.id,
              name: player.name,
              passedTestCases: 0,
              timeTaken: duration
            });
          }
        });

        rooms[roomId].results.sort((a, b) => {
          if (b.passedTestCases !== a.passedTestCases) {
            return b.passedTestCases - a.passedTestCases;
          } else {
            return a.timeTaken - b.timeTaken;
          }
        });

        io.to(roomId).emit("contest-ended");
        console.log(rooms[roomId].results)
      }
    }, duration);
    rooms[roomId].timerId = timerId;
  });

  socket.on("submit-code", (roomId, submissionData) => {
    const room = rooms[roomId];
    const userId = socketToUser.get(socket.id);

    if (!room || room.status !== "progressing" || !userId) return;
    if (room.results.find(r => r.userId === userId)) return;

    const submitTime = Date.now();
    const duration = 1 * 60 * 1000;
    const startTime = room.endTime - duration;

    const player = room.players.find(p => p.id === userId);

    room.results.push({
      userId,
      name: player.name,
      passedTestCases: submissionData.passedTestCases,
      timeTaken: submitTime - startTime
    });

    if (room.results.length === room.players.length) {
      clearTimeout(room.timerId);
      room.status = "finished";

      room.results.sort((a, b) => {
        if (b.passedTestCases !== a.passedTestCases) {
          return b.passedTestCases - a.passedTestCases;
        } else {
          return a.timeTaken - b.timeTaken;
        }
      });

      io.to(roomId).emit("contest-ended");
      console.log(rooms[roomId].results)
    }
  });

  socket.on("has-ended", (roomId, callback) => {
    if (rooms[roomId].status === "progressing") {
      callback({
        success: false
      })
    } else {
      callback({
        success: true,
        results: rooms[roomId].results
      })
    }
  })

  socket.on("disconnect", () => {
    const userId = socketToUser.get(socket.id);
    if (!userId) {
      console.log("User disconnected - fired but the userId was not found inside socketToUser.")
      return
    }
    console.log("an instance of user disconnected with userId: " + userId + "and socket.id: " + socket.id);
    socketToUser.delete(socket.id);
    const sockets = userToSockets.get(userId);
    const updated = sockets.filter(sock => sock !== socket.id)
    userToSockets.set(userId, updated);
    if (updated.length === 0) {
      const roomId = userToRoom.get(userId);
      userToSockets.delete(userId);
      userToRoom.delete(userId);
      console.log("All data related to the player has been deleted.")
      
        rooms[roomId].players = rooms[roomId].players.filter(player => player.id !== userId);
        if (rooms[roomId].players.length > 0) {
          if (rooms[roomId].host === userId) {
            rooms[roomId].host = rooms[roomId].players[0].id
          }
          io.to(roomId).emit("players-update", {
            players: rooms[roomId].players,
            host: rooms[roomId].host,
          });
          return;
        }
        delete rooms[roomId];
    }
  })
});

server.listen(4000, () => {
  console.log("Socket server running on port 4000");
});