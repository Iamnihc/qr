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
const port = 3000; // default port to listen
const app = express_1.default();
let server = new http_1.default.Server(app);
let io = new socket_io_1.default.Server(server);
io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("url", (id) => {
        let person = peopleCodes.get(id);
        io.emit("person", person);
    });
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