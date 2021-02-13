// ts stuff (we love to see it)
import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";
import { Socket } from "dgram";

class Messasges {
  story: string;
  constructor(story: string) {
    this.story = story;
  }
}

const tessMessages = new Messasges(
  "Hello tess"
);

class Pronouns {
  constructor(public p1: string, public p2: string, public p3: string) {}
}
const he = new Pronouns("he", "him", "his");
const she = new Pronouns("she", "her", "hers");
const they = new Pronouns("they", "them", "theirs");

class Person {
  ioHandler = Socket;

  constructor(
    readonly code: string,
    readonly abr: string,
    readonly fullname: Array<string>,
    readonly house: number,
    public msg: Messasges,
    readonly rep: string,
    public pronoun: Pronouns = they
  ) {}
}


let peopleCodes = {
  "746568": new Person(
    "7456568",
    "teh",
    ["Tess", "Hornbeck"],
    7,
    tessMessages,
    "X"
  ),
  "6e6163": new Person(
    "6e6163",
    "nac",
    ["Naomi", "Cheng"],
    7,
    tessMessages,
    "X"
  ),
};

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
app.use(express.static("templates"));

// create the homepage route at '/'
app.get("/", (req, res) => {
  res.render("joinworld", {
    title: "Welcome to this... thing",
    message: "Enter Code",
  });
});
app.use(function (req, res, next) {
  res.status(404).render("joinworld", {
    title: "Welcome to this... thing",
    message: "Invalid Code",
  });
});
server.listen(port, function () {
  console.log(`listening on *:${port}`);
});
