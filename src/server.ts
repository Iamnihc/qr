// ts stuff (we love to see it)
import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";
import * as peopleClass from "./people";
import { userInfo } from "os";

const port = 3000; // default port to listen

const app = express();
let server = new http.Server(app);
let io = new socketIO.Server(server);

const charWidth = 20;
const windowBounds = {
  x: { min: 0, max: 1024 - charWidth },
  y: { min: 0, max: 576 - charWidth },
};
const hitWidth = 64;
const hitHeight = 32;

// Socket shit

io.on("connection", function (socket: any) {
  //console.log("a user connected");
  let user: peopleClass.Person;
  socket.on("url", (id: string) => {
    user = peopleClass.peopleCodes.get(id.substr(1));
    user.websock = socket.id;
    socket.emit("person", user);

    let fullList = Array.from(peopleClass.peopleCodes.values()).map((x) =>
      x.exportList()
    );
    io.emit("update", fullList);
  });
  socket.on("ping", () => {
    console.log("pingeded");
    socket.emit("pong");
  });
  socket.on("move", (loc: any) => {
    // for some reason this happens sometimes and i dont want it\
    if (user == undefined) {
      return;
    }
    let oldDoor = user.getHitBox();
    user.loc[0] += loc.mvmt[0];
    user.loc[1] += loc.mvmt[1];
    if (user.loc[0] > windowBounds.x.max) {
      user.loc[0] = windowBounds.x.max;
    }
    if (user.loc[0] < windowBounds.x.min) {
      user.loc[0] = windowBounds.x.min;
    }
    if (user.loc[1] > windowBounds.y.max) {
      user.loc[1] = windowBounds.y.max;
    }
    if (user.loc[1] < windowBounds.y.min) {
      user.loc[1] = windowBounds.y.min;
    }
    //socket.emit("update", person);
    let fullList = Array.from(peopleClass.peopleCodes.values()).map((x) =>
      x.exportList()
    );
    if (user.getHitBox() != oldDoor) {
      if (user.getHitBox() != -1) {
        let possibleHover =
          peopleClass.roomList[
            peopleClass.roomList[user.currentZone].doors[user.getHitBox()]
          ];
        // There is no spoon... i mean door
        if (possibleHover != undefined) {
          socket.emit("hoverText", "To: " + possibleHover.name);
          
          let removeCode = user.addInfoMessage(
            new peopleClass.InfoMessage(
            `To: ${possibleHover.name}`
          ));

          user.options.push(
            new peopleClass.Travel(user, possibleHover, user.getHitBox())
          );
        }
      } else {

        socket.emit("hoverText", "");
      }
    }
    io.emit("update", fullList);
    console.log(user.loc);
  });
  socket.on("disconnected", () => {
    user.online = false;
  });
});

// I shouldnt need to touch this
// add & configure middleware
app.set("view engine", "pug");
// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.use(express.static("templates"));

// Express (should be done)

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
