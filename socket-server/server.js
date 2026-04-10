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
const map = new Map();
function addToMap(key, value) {
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(value);
}

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  //host creating room
  socket.on("create-room", (name, userId) => {
    addToMap(userId, socket.id);
    const roomId = crypto.randomBytes(8).toString("hex");

    rooms[roomId] = {
      host: socket.id,
      players: [{ id: socket.id, name: name }],
      status: "waiting"
    }

    socket.join(roomId)
    socket.emit("room-created", roomId)
    console.log("Room created")
  })

  //player joining room
  socket.on("join-room", (name, roomId, userId) => {
    if (!rooms[roomId]) {
      socket.emit("Room does not exist.");
      console.log("Room does not exist.")
      return;
    }

    socket.join(roomId);
    addToMap(userId, socket.id);

    rooms[roomId].players.push({ id: socket.id, name: name });
    socket.emit("joined-room", roomId);
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
  socket.on("register-user", (userId, roomId) => {
    const socketIdExists = rooms[roomId].players.some(obj => obj.id === socket.id);
    if (!socketIdExists) {
      socket.join(roomId)
      addToMap(userId, socket.id);
    }
  })

  //check if this user exists
  socket.on("check-user", (userId, callback) => {
    if (map.has(userId)) {
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
});

server.listen(4000, () => {
  console.log("Socket server running on port 4000");
});