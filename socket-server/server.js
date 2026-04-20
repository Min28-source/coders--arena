const { Server } = require("socket.io");
const http = require("http");
const crypto = require("crypto");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//storages
let rooms = {}
const socketToUser = new Map();
const userToRoom = new Map();
const userToSockets = new Map();
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
    const roomId = crypto.randomBytes(8).toString("hex");

    rooms[roomId] = {
      host: userId,
      players: [{ id: userId, name: name }],
      status: "waiting"
    }

    userToRoom.set(userId, roomId);
    socketToUser.set(socket.id, userId);
    socket.join(roomId);
    socket.emit("room-created", roomId, userId);
  })

  //player joining room
  socket.on("join-room", (name, roomId) => {
    if (!rooms[roomId]) {
      socket.emit("Room does not exist.");
      console.log("Room does not exist.")
      return;
    }

    const userId = crypto.randomUUID();
    socket.join(roomId);
    addToUserToSockets(userId, socket.id);
    socketToUser.set(socket.id, userId);
    userToRoom.set(userId, roomId);

    rooms[roomId].players.push({ id: userId, name: name });
    socket.emit("joined-room", userId);
  })

  //players in the room to display over sidebar
  socket.on("get-players-data", (roomId) => {
    console.log(`Broadcasting player data to ${roomId}`)
    io.to(roomId).emit("players-update", {
      players: rooms[roomId].players,
      host: rooms[roomId].host
    })
  });

  //starting contest
  socket.on("start-contest", (roomId) => {
    rooms[roomId].status = "progressing";
    io.to(roomId).emit("contest-started");
  });

  //adding a new socket.id to the map if a user opens a new tab or something
  socket.on("register-user", (userId, roomId, name) => {
    if (disconnectTimers.has(userId)) {
      clearTimeout(disconnectTimers.get(userId));
      disconnectTimers.delete(userId);
    }

    if (!socketToUser.get(socket.id)) {
      socketToUser.set(socket.id, userId);
    }

    if (!userToSockets.has(userId)) {
      userToSockets.set(userId, [])
    }

    userToSockets.get(userId).push(socket.id);

    if (!userToRoom.has(userId)) {
      userToRoom.set(userId, socket.id)
    }

    const room = rooms[roomId];
    
    if (!room.players.find(p => p.id === userId)) {
      room.players.push({ id: userId, name: name });
    }

    socket.join(roomId);

    io.to(roomId).emit("players-update", {
      players: rooms[roomId].players,
      host: rooms[roomId].host
    })
  })

  //check if this user exists
  socket.on("check-user", (userId, callback) => {
    if (userToSockets.has(userId)) {
      callback({ exists: true })
    } else {
      callback({ exists: false })
    }
  })

  //check if this roomId exists
  socket.on("validate-roomId", (roomId, callback) => {
    if (rooms[roomId]) {
      callback({ exists: true })
    } else {
      callback({ exists: false })
    }
  })

  socket.on("disconnect", () => {
    const userId = socketToUser.get(socket.id);
    if (!userId) return;
    console.log(`User disconnected ${socket.id}`)
    socketToUser.delete(socket.id);

    const sockets = userToSockets.get(userId);
    if (!sockets) return;

    const updated = sockets.filter(id => id !== socket.id);
    if (updated.length === 0) {
      const timer = setTimeout(() => {
        userToSockets.delete(userId);
        const room = rooms[userToRoom.get(userId)];
        room.players = room.players.filter(player => player.id != userId);
        if (userId === room.host) {
          if (room.players.length > 0) {
            room.host = room.players[0].id;
          } else {
            delete rooms[userToRoom.get(userId)];
            return;
          }
        }
        io.to(userToRoom.get(userId)).emit("players-update", {
          players: room.players,
          host: room.host
        });
      }, 3000);
      disconnectTimers.set(userId, timer);
    } else {
      userToSockets.set(userId, updated);
    }
  })
});

server.listen(4000, () => {
  console.log("Socket server running on port 4000");
});