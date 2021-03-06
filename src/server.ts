// ts stuff (we love to see it)
import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";
import * as peopleClass from "./people";

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
// const boxes = [
//   [
//     [502 - hitWidth, 502 + hitWidth],
//     [556 - hitHeight, 556],
//   ],
//   [
//     [259 - hitWidth, 259 + hitWidth],
//     [556 - hitHeight, 556],
//   ],
//   [
//     [259 - hitWidth, 259 + hitWidth],
//     [0, hitHeight],
//   ],
//   [
//     [502 - hitWidth, 502 + hitWidth],
//     [0, hitHeight],
//   ],
//   [
//     [753 - hitWidth, 753 + hitWidth],
//     [0, hitHeight],
//   ],
//   [
//     [753 - hitWidth, 753 + hitWidth],
//     [556 - hitHeight, 556],
//   ],
// ];

// function hitbox(coord: number, range: Array<number>) {
//   return coord >= range[0] && coord <= range[1];
// }
// function inSquare(coord: Array<number>, box: Array<Array<number>>) {
//   return hitbox(coord[0], box[0]) && hitbox(coord[1], box[1]);
// }
// function getHitBox(coord: Array<number>) {
//   for (let i = 0; i < boxes.length; i++) {
//     if (inSquare(coord, boxes[i])) return i;
//   }
//   return -1;
// }

// Socket shit

io.on("connection", function (socket: any) {
  //console.log("a user connected");
  let person: peopleClass.Person;
  socket.on("url", (id: string) => {
    person = peopleClass.peopleCodes.get(id.substr(1));
    person.websock = socket.id;
    socket.emit("person", person);

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
    if (person == undefined) {
      return;
    }
    person.loc[0] += loc.mvmt[0];
    person.loc[1] += loc.mvmt[1];
    if (person.loc[0] > windowBounds.x.max) {
      person.loc[0] = windowBounds.x.max;
    }
    if (person.loc[0] < windowBounds.x.min) {
      person.loc[0] = windowBounds.x.min;
    }
    if (person.loc[1] > windowBounds.y.max) {
      person.loc[1] = windowBounds.y.max;
    }
    if (person.loc[1] < windowBounds.y.min) {
      person.loc[1] = windowBounds.y.min;
    }
    //socket.emit("update", person);
    let fullList = Array.from(peopleClass.peopleCodes.values()).map((x) =>
      x.exportList()
    );

    if (person.getHitBox() != -1) {
      let possibleHover =
        peopleClass.roomList[
          peopleClass.roomList[person.currentZone].doors[person.getHitBox()]
        ];
      // There is no spoon... i mean door
      if (possibleHover != undefined) {
        socket.emit("hoverText", "To: " + possibleHover.name);
      }
    } else {
      socket.emit("hoverText", "");
    }

    //console.log(fullList);
    //console.log(JSON.stringify(peopleClass.peopleCodes.values));
    io.emit("update", fullList);
    console.log(person.loc);
  });
  socket.on("disconnected", () => {
    person.online = false;
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
