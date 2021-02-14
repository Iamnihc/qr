// ts stuff (we love to see it)
import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";
import { url } from "inspector";
import * as people from "./people";

const port = 3000; // default port to listen

const app = express();
let server = new http.Server(app);
let io = new socketIO.Server(server);

// Socket shit

io.on("connection", function (socket: any) {
  console.log("a user connected");
  socket.on("url", (id: string) => {
    let person: any = people.peopleCodes.get(id.substr(1));
    console.log(id);
    console.log(person);
    //person = JSON.stringify(person);
    console.log(typeof socket);
    socket.emit("person", person);
  });
});

// add & configure middleware
app.set("view engine", "pug");
// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.use(express.static("templates"));

// Express (should be done)o
// create the homepage route at '/'
app.get("/", (req, res) => {
  res.render("joinworld", {
    title: "Welcome to this... thing",
    message: "Enter Code",
  });
});
app.get("/746568", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
app.get("/6e6163", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
app.get("/6c6173", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
app.get("/616c6d", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
app.get("/6a756a", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
app.get("/676168", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
app.get("/736563", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
// gary
app.get("/67616d", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});

// tyler
app.get("/747963", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});

//mayda
app.get("/6d6165", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
// Milla
app.get("/6d6965", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});

// Deborah
app.get("/64656a", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
// alissa
app.get("/616c62", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
app.get("/616d70", (req, res) => {
  res.render("game", {
    title: "Happy valentines day",
  });
});
// chimmy
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
