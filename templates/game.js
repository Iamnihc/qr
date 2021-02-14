var socket = io();
var person;

idCode = window.location.pathname;
window.addEventListener("load", function () {
  socket.emit("url", idCode);
});

socket.on("person", (item) => {
  console.log(item);
  person = item;
  document.getElementById(
    "welcome"
  ).innerHTML = `Welcome, ${person.fullname[0]}`;
});
