var socket = io();
idCode = window.location.pathname;
socket.emit("url", idCode);
