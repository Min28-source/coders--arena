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

// In-memory room store (temporary for learning)
const rooms = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // CREATE ROOM
  socket.on("create-room", () => {
    const roomId = crypto.randomBytes(4).toString("hex");

    rooms[roomId] = {
      host: socket.id,
      players: [socket.id],
      status: "waiting"
    };

    socket.join(roomId);

    socket.emit("room-created", roomId);
    io.to(roomId).emit("room-update", rooms[roomId]);

    console.log("Room created:", roomId);
  });

  // JOIN ROOM
  socket.on("join-room", (roomId) => {
    if (!rooms[roomId]) {
      socket.emit("error-message", "Room does not exist");
      return;
    }

   if(rooms[roomId].players.includes(socket.id)){
    console.log("Player already exists..")
    return
   }

    rooms[roomId].players.push(socket.id);
    socket.join(roomId);

    io.to(roomId).emit("room-update", rooms[roomId]);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    // remove user from any room
    for (const roomId in rooms) {
      const room = rooms[roomId];
      room.players = room.players.filter(id => id !== socket.id);

      if (room.players.length === 0) {
        delete rooms[roomId];
        console.log("Room deleted:", roomId);
      }
    }
  });
});

server.listen(4000, () => {
  console.log("Socket server running on port 4000");
});