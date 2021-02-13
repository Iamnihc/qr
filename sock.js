// client-side
const io = require("socket.io-client");
const socket = io("https://localhost:3000", {
  withCredentials: true,
  extraHeaders: {
    movesocket: "abcd",
  },
});
