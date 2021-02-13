// ts stuff (we love to see it)
import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";

const port = 3000; // default port to listen

const app = express();
let server = new http.Server(app);
let io = new socketIO.Server(server);

io.on("connection", function (socket: any) {
  console.log("a user connected");
});

// add & configure middleware
app.set("view engine", "pug");
// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.use(express.static("src"));

// create the homepage route at '/'
app.get("/", (req, res) => {});

server.listen(port, function () {
  console.log(`listening on *:${port}`);
});
