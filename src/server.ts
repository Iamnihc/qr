// ts stuff (we love to see it)
import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";
import { Socket } from "dgram";

enum playable {
  a = "§",
  b = "¤",
  c = "ˁ",
  d = "ˀ",
  e = "֍",
  f = "৩",
  g = "ᐁ",
  h = "⊙",
  i = "⏺",
  j = "☻",
  k = "⚉",
  l = "⛇",
  m = "⛄",
  n = "⛾",
  o = "❁",
  p = "❂",
  q = "⟁",
  r = "❤",
  s = "❥",
  t = "🐱",
  u = "😼",
  v = "🙀",
  w = "😿",
  x = "🐕",
  y = "🐶",
  z = "🐵",
  aa = "😮",
  ab = "⸮",
  ac = "?",
  ae = "🧋",
}

class Messasges {
  constructor(public greets: Array<string>) {}
}

const tehMessages = new Messasges([
  "Hello tessandra, have a happy valentines day",
  "hello again but longer, happy day",
]);
const nacMessages = new Messasges([
  "Hello Naomi",
  "maybe put some text in here",
]);
const lasMessages = new Messasges([
  "Hello Lauren",
  "maybe put some text in here",
]);
const almMessages = new Messasges([
  "Hello Alex",
  "maybe put some text in here",
]);
const jujMessages = new Messasges([
  "Hello Jang",
  "maybe put some text in here",
]);
const gahMessages = new Messasges([
  "Hello Gab",
  "maybe put some or a lot of  text in here",
]);
const secMessages = new Messasges([
  "Hello Seth",
  "maybe put some text in here",
]);
const gamMessages = new Messasges([
  "Hello Gary",
  "maybe put some text in here",
]);
const tycMessages = new Messasges([
  "Hello Tyler",
  "maybe put some text in here",
]);
const maeMessages = new Messasges([
  "Hello Mayda",
  "maybe put some text in here",
]);
const mieMessages = new Messasges([
  "Hello Milla",
  "maybe put some text in here",
]);
const dejMessages = new Messasges([
  "Hello Deborah",
  "maybe put some text in here",
]);
const albMessages = new Messasges([
  "Hello Alissa",
  "maybe put some text in here",
]);
const ampMessages = new Messasges([
  "Hello Amrita",
  "maybe put some text in here",
]);
const chsMessages = new Messasges([
  "Hello Chinmai",
  "maybe put some text in here",
]);

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
    readonly rep: playable,
    public pronoun: Pronouns = they
  ) {
    this.msg.greets.push(`Hello, ${this.fullname[0]}`);
    this.msg.greets.push(`Hey, ${this.fullname[0]}`);
    this.msg.greets.push(`What's up, ${this.fullname[0]}`);
    this.msg.greets.push(`Happy valentines day, ${this.fullname[0]}`);
    this.msg.greets.push(`Is that ${this.fullname[0]}? I've missed you...`);
  }
}

let peopleCodes = {
  "746568": new Person(
    "7456568",
    "teh",
    ["Tess", "Hornbeck"],
    7,
    tehMessages,
    playable.y
  ),
  "6e6163": new Person(
    "6e6163",
    "nac",
    ["Naomi", "Cheng"],
    7,
    nacMessages,
    playable.ae
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
  res.render("joinworld", {
    title: "Welcome to this... thing",
    message: "Invalid Code",
  });
});
server.listen(port, function () {
  console.log(`listening on *:${port}`);
});
