// client-side
const io = require("socket.io-client");
const socket = io("https://api.example.com", {
  withCredentials: true,
  extraHeaders: {
    movesocket: "abcd",
  },
});
