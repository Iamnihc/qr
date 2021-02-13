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
class Messasges {
    constructor(story) {
        this.story = story;
    }
}
const tessMessages = new Messasges("Hello tess");
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
    }
}
let peopleCodes = {
    "746568": new Person("7456568", "teh", ["Tess", "Hornbeck"], 7, tessMessages, "X"),
    "6e6163": new Person("6e6163", "nac", ["Naomi", "Cheng"], 7, tessMessages, "X"),
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
    res.status(404).render("joinworld", {
        title: "Welcome to this... thing",
        message: "Invalid Code",
    });
});
server.listen(port, function () {
    console.log(`listening on *:${port}`);
});
//# sourceMappingURL=server.js.map