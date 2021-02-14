var socket = io();
var person;
var ploc = {
  room: 0,
  coord=[0,0]
};
function render(){
    socket.emit()
}
idCode = window.location.pathname;
window.addEventListener("load", function () {
  socket.emit("url", idCode);
});

window.addEventListener("keydown", (event) => {});

socket.on("position", (give) => {
  for (let person of give) {
    if (person.code) {
    }
  }
});

socket.on("person", (item) => {
  console.log(item);
  person = item;
  document.getElementById(
    "welcome"
  ).innerHTML = `Welcome, ${person.fullname[0]}`;
});
