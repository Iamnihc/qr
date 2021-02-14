// ts stuff (we love to see it)
import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";
import { url } from "inspector";
import * as people from'./people';


const port = 3000; // default port to listen

const app = express();
let server = new http.Server(app);
let io = new socketIO.Server(server);

io.on("connection", function (socket: any) {
  console.log("a user connected");
  socket.on("url", (id: string) => {
    let person: any = people.peopleCodes.get(id);
    io.emit("person", person);
  });
});

// add & configure middleware
app.set("view engine", "pug");
// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.use(express.static("templates"));

// create the homepage route at '/'
app.get("/", (req, res) => {
  res.render("joinworld", {
    title: "Welcome to this... thing",
    message: "Enter Code",
  });
});
app.get("/636873", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});

// Ivalid code (404 cheat)
app.use(function (req, res, next) {
  res.render("joinworld", {
    title: "Welcome to this... thing",
    message: "Invalid Code",
  });
});
server.listen(port, function () {
  console.log(`listening on *:${port}`);
});
