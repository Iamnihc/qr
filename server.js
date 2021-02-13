"use strict";
// server-side
exports.__esModule = true;
var http_1 = require("http");
var httpServer = http_1.createServer();
var io = require("socket.io")(httpServer, {
    cors: {
        origin: "https://chinmai.dev/",
        methods: ["GET", "POST"],
        allowedHeaders: ["movesocket"],
        credentials: true
    }
});
io.on("connection", function (socket) {
    console.log("git");
});
httpServer.listen(3000);
