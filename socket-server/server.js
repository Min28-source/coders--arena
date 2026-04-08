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

  //host creating room
  socket.on("create-room", (name) => {
    const roomId = crypto.randomBytes(8).toString("hex");

    rooms[roomId] = {
      host: socket.id,
      players: [{ id: socket.id, name: name }],
      status: "waiting"
    }

    socket.join(roomId)
    socket.emit("room-created", roomId)
    console.log("Room created")

    io.to(roomId).emit("players-update", rooms[roomId].players)
  })

  //player joining room
  socket.on("join-room", (name, roomId) => {
    if (!rooms[roomId]) {
      socket.emit("Room does not exist.");
      return;
    }

    socket.join(roomId)

    rooms[roomId].players.push({ id: socket.id, name: name });
    socket.emit("joined-room", roomId);
    console.log(socket.id + " joined room: " + roomId);

    io.to(roomId).emit("players-update", rooms[roomId].players)
    console.log(rooms[roomId].players)
  })

  //players in the room to display over sidebar
  socket.on("get-players-data", (roomId) => {
    io.to(roomId).emit("players-update", rooms[roomId].players)
  })

  //starting contest
  socket.on("start-contest", (roomId) => {
    rooms[roomId].status = "progressing";
    io.to(roomId).emit("contest-started");
  })

  //check if this roomId exists
  socket.on("validate-roomId", (roomId) => {
    if (rooms[roomId]) {
      socket.emit("room-validation-result", { exists: true });
    } else {
      socket.emit("room-validation-result", { exists: false });
    }
  })
});

server.listen(4000, () => {
  console.log("Socket server running on port 4000");
});