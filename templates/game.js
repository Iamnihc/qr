var socket = io();
var currentPlayer;
var keysDown = [false, false, false, false];
var allPlayers = [];
// Player locartion
var ploc = {
  room: 0,
  coord: [0, 0],
  mvmt: [0, 0],
};

function roomChange(room) {
  document.getElementById(
    "mainGameScreen"
  ).style.backgroundImage = `url('${room.image}')`;
}
function render() {
  let childholder = document.getElementById("mainGameScreen"); // murder will occur here
  // KILL THE CHILDREN
  while (childholder.firstChild) {
    childholder.removeChild(childholder.firstChild);
  }

  for (let chr of allPlayers) {
    if (chr.room == ploc.room) {
      let este = document.createElement("div");
      este.classList.add("character");
      este.innerHTML = chr.rep;
      este.style.top = `${chr.coord[1] + 50}px`;
      este.style.left = `${chr.coord[0]}px`;
      childholder.appendChild(este);
    }
  }
}

function move() {
  socket.emit("movement", ploc);
}
console.log(Date.now);
let dnow = Date.now();
socket.emit("ping");

socket.on("pong", () => {
  console.log(dnow - Date.now());
});
idCode = window.location.pathname;
window.addEventListener("load", function () {
  socket.emit("url", idCode);
});

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "d":
      ploc.mvmt[0] = 2;
      keysDown[0] = true;
      break;
    case "a":
      ploc.mvmt[0] = -2;
      keysDown[1] = true;
      break;
    case "w":
      ploc.mvmt[1] = -2;
      keysDown[2] = true;
      break;
    case "s":
      ploc.mvmt[1] = 2;
      keysDown[3] = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      ploc.mvmt[0] = 0;
      keysDown[0] = false;
      break;
    case "a":
      ploc.mvmt[0] = 0;
      keysDown[1] = false;
      break;
    case "w":
      ploc.mvmt[1] = 0;
      keysDown[2] = false;
      break;
    case "s":
      ploc.mvmt[1] = 0;
      keysDown[3] = false;
      break;
  }
});

function keyPressLoop() {
  if (keysDown.some((x) => x) && document.hasFocus) {
    socket.emit("move", ploc);
  }
}

keyCheck = setInterval(keyPressLoop, 10);

socket.on("update", (peopleList) => {
  for (let loopPerson of peopleList) {
    if (loopPerson.code == currentPlayer.code) {
      ploc.coord = loopPerson.coord;
    }
  }
  allPlayers = peopleList;
  render();
});

socket.on("newRoom", (peopleList) => {});

socket.on("person", (item) => {
  console.log(item);
  currentPlayer = item;
  document.getElementById(
    "welcome"
  ).innerHTML = `Welcome, ${currentPlayer.fullname[0]}`;
  socket.emit("move", ploc);
});

socket.on("roomChange", (roomExport) => {
  ploc.room = roomExport.roomNumber;
  update();
  roomChange(roomExport);
});

socket.on("hoverText", (text) => {document.getElementById()});
