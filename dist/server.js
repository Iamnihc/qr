"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ts stuff (we love to see it)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const dgram_1 = require("dgram");
var playable;
(function (playable) {
    playable["a"] = "\u00A7";
    playable["b"] = "\u00A4";
    playable["c"] = "\u02C1";
    playable["d"] = "\u02C0";
    playable["e"] = "\u058D";
    playable["f"] = "\u09E9";
    playable["g"] = "\u1401";
    playable["h"] = "\u2299";
    playable["i"] = "\u23FA";
    playable["j"] = "\u263B";
    playable["k"] = "\u2689";
    playable["l"] = "\u26C7";
    playable["m"] = "\u26C4";
    playable["n"] = "\u26FE";
    playable["o"] = "\u2741";
    playable["p"] = "\u2742";
    playable["q"] = "\u27C1";
    playable["r"] = "\u2764";
    playable["s"] = "\u2765";
    playable["t"] = "\uD83D\uDC31";
    playable["u"] = "\uD83D\uDE3C";
    playable["v"] = "\uD83D\uDE40";
    playable["w"] = "\uD83D\uDE3F";
    playable["x"] = "\uD83D\uDC15";
    playable["y"] = "\uD83D\uDC36";
    playable["z"] = "\uD83D\uDC35";
    playable["aa"] = "\uD83D\uDE2E";
    playable["ab"] = "\u2E2E";
    playable["ac"] = "?";
    playable["ae"] = "\uD83E\uDDCB";
})(playable || (playable = {}));
class Messasges {
    constructor(greets) {
        this.greets = greets;
    }
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
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
}
const he = new Pronouns("he", "him", "his");
const she = new Pronouns("she", "her", "hers");
const they = new Pronouns("they", "them", "theirs");
class Person {
    constructor(code, abr, fullname, house, msg, rep, pronoun = they) {
        this.code = code;
        this.abr = abr;
        this.fullname = fullname;
        this.house = house;
        this.msg = msg;
        this.rep = rep;
        this.pronoun = pronoun;
        this.ioHandler = dgram_1.Socket;
        this.msg.greets.push(`Hello, ${this.fullname[0]}`);
        this.msg.greets.push(`Hey, ${this.fullname[0]}`);
        this.msg.greets.push(`What's up, ${this.fullname[0]}`);
        this.msg.greets.push(`Happy valentines day, ${this.fullname[0]}`);
        this.msg.greets.push(`Is that ${this.fullname[0]}? I've missed you...`);
    }
}
let peopleCodes = {
    "746568": new Person("7456568", "teh", ["Tess", "Hornbeck"], 7, tehMessages, playable.y),
    "6e6163": new Person("6e6163", "nac", ["Naomi", "Cheng"], 7, nacMessages, playable.ae),
};
const port = 3000; // default port to listen
const app = express_1.default();
let server = new http_1.default.Server(app);
let io = new socket_io_1.default.Server(server);
io.on("connection", function (socket) {
    console.log("a user connected");
});
// add & configure middleware
app.set("view engine", "pug");
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.use(express_1.default.static("templates"));
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
//# sourceMappingURL=server.js.map