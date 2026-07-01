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

//helpers
function emitPlayers(roomId) {
  const room = rooms[roomId];

  if (room.status === "progressing") {
    io.to(roomId).emit("players-update", {
      players: room.players,
      host: room.host,
      serverTime: Date.now(),
      endTime: room.endTime,
    });
  } else {
    io.to(roomId).emit("players-update", {
      players: room.players,
      host: room.host,
    });
  }
}

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
    console.log(rooms[roomId])
  })

  //player joining room for the first time
  socket.on("join-room", (name, roomId) => {
    if (rooms[roomId] === false) {
      socket.emit("room-not-found");
      return;
    }

    // if (alreadyHasUserId && !disconnectTimers.has(alreadyHasUserId)) {
    //   return;
    // }

    // if (disconnectTimers.has(alreadyHasUserId)) {
    //   clearTimeout(disconnectTimers.get(alreadyHasUserId));

    //   socket.join(roomId);

    //   socketToUser.set(socket.id, alreadyHasUserId);
    //   addToUserToSockets(alreadyHasUserId, socket.id)

    //   const room = rooms[roomId];

    //   if (room.status === "progressing") {
    //     io.to(roomId).emit("players-update", {
    //       players: room.players,
    //       host: room.host,
    //       serverTime: Date.now(),
    //       endTime: room.endTime,
    //     });
    //   } else {
    //     io.to(roomId).emit("players-update", {
    //       players: room.players,
    //       host: room.host,
    //     });
    //   }
    //   return;
    // }

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
    const room = rooms[roomId];

    if (room.status === "progressing") {
      io.to(roomId).emit("players-update", {
        players: room.players,
        host: room.host,
        serverTime: Date.now(),
        endTime: room.endTime,
      });
    } else {
      io.to(roomId).emit("players-update", {
        players: room.players,
        host: room.host,
      });
    }
  });


  socket.on("get-players-data", (roomId, callback) => {
    console.log("Get players data got fired over the server....")
    if (!rooms[roomId]) {
      callback({ success: false });
      return;
    }

    callback({
      success: true,
      players: rooms[roomId].players,
      host: rooms[roomId].host
    })
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
    const duration = 0.1 * 60 * 1000;
    const endTime = currTime + duration;

    rooms[roomId].status = "progressing";
    rooms[roomId].endTime = endTime;
    io.to(roomId).emit("contest-started", { problem, endTime, serverTime: currTime });
  });

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
    if (updated.length > 0) {
      userToSockets.set(userId, updated);
      return
    } else {
      const roomId = userToRoom.get(userId);
      const timer = setTimeout(() => {
        userToSockets.delete(userId);
        userToRoom.delete(userId);
        console.log("All data related to the player has been deleted.")
        rooms[roomId].players = rooms[roomId].players.filter(player => player.id !== userId);
        if (rooms[roomId].players.length > 0) {
          console.log(rooms[roomId])
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
      }, 3000);
      disconnectTimers.set(userId, timer);
    }
  })
});

server.listen(4000, () => {
  console.log("Socket server running on port 4000");
});