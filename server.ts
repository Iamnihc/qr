// server-side

import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "https://chinmai.dev",
    methods: ["GET", "POST"],
    allowedHeaders: ["movesocket"],
    credentials: true,
  },
});

io.on("connection", (socket: Socket) => {
  console.log("git");
});

httpServer.listen(3000);
