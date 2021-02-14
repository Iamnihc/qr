"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ts stuff (we love to see it)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const peopleClass = __importStar(require("./people"));
const port = 3000; // default port to listen
const app = express_1.default();
let server = new http_1.default.Server(app);
let io = new socket_io_1.default.Server(server);
// Socket shit
io.on("connection", function (socket) {
    //console.log("a user connected");
    let person;
    socket.on("url", (id) => {
        person = peopleClass.peopleCodes.get(id.substr(1));
        //console.log(id);
        //console.log(person);
        //person = JSON.stringify(person);
        //console.log(typeof socket);
        person.websock = socket.id;
        socket.emit("person", person);
    });
    socket.on("ping", () => {
        console.log("pingeded");
        socket.emit("pong");
    });
    socket.on("move", (loc) => {
        if (person == undefined) {
            return;
        }
        //console.log(person);
        //console.log(person.room == loc.room);
        person.loc[0] += loc.mvmt[0];
        person.loc[1] += loc.mvmt[1];
        //socket.emit("update", person);
        io.emit("update", peopleClass.peopleCodes.values());
        console.log(person.loc);
    });
});
// I shouldnt need to touch this
// add & configure middleware
app.set("view engine", "pug");
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.use(express_1.default.static("templates"));
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
//# sourceMappingURL=server.js.map