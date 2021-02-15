const { chown } = require("fs/promises");

var socket = io();
var currentPlayer;
var keysDown = [false, false, false, false];
var inRoom = [];
// Player locartion
var ploc = {
  room: 0,
  coord: [0, 0],
  mvmt: [0, 0],
};

function render() {
  let childholder = document.getElementById("mainGameScreen"); // murder will occur here
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      // childHolder is parent
      // murdder tiem
      
  // sorry, idk how to murder children, i am wholesome...
  //mmmmm child murdering
  childholder.remove
  let //make a box to store children!
  childholder = []
  for(let chr of inRoom){
    if (chr.room == plock.room){
      childholder.push(chr.room)
    }
    // chr object { name
    //     let out = {
    //   name: this.fullname,
    //   code: this.code,
    //   rep: this.rep,
    //   room: this.currentZone,
    //   coord: this.loc,
    // };
    // childern will enter a 'box' here
    let este = document.createElement("div")
    este.classList.add("character")
    este.style.top 

  }
  document.getElementById("character").innerHTML = currentPlayer.rep;
  document.getElementById("character").style.left = `${ploc.coord[0]}px`;
  document.getElementById("character").style.top = `${ploc.coord[1] + 50}px`;
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
  //console.log(keysDown);
  if (keysDown.some((x) => x)) {
    socket.emit("move", ploc);
  }
}

keyCheck = setInterval(keyPressLoop, 10);

socket.on("update", (peopleList) => {
  console.log(peopleList);
  for (let loopPerson of peopleList) {
    if (loopPerson.currentZone == ploc.room) {
    }
    if (loopPerson.code == currentPlayer.code) {
      ploc.coord = loopPerson.coord;
    }
  }
  render();
});

socket.on("newRoom", (peopleList) => {});

socket.on("person", (item) => {
  console.log(item);
  currentPlayer = item;
  document.getElementById(
    "welcome"
  ).innerHTML = `Welcome, ${currentPlayer.fullname[0]}`;
});
