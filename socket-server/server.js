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

let rooms = {}
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-room", () => {
    const roomId = crypto.randomBytes(8).toString("hex");

    rooms[roomId] = {
      host: socket.id,
      players: [socket.id]
    }

    socket.join(roomId)
    socket.emit("room-created", roomId)
    io.to(roomId).emit("room-update", {
      players: rooms[roomId].players
    })
  })

  socket.on("join-room", (roomId) => {
    if (!rooms[roomId]) {
      socket.emit("Room does not exist.")
      return
    }
    rooms[roomId].players.add(socket.id)
    socket.emit("Player: " + socket.id + "," + " was added to the room: " + roomId)

  })
});

server.listen(4000, () => {
  console.log("Socket server running on port 4000");
});