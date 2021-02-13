// client-side

const socket = io("https://localhost:3000", {
  withCredentials: true,
  extraHeaders: {
    "movesocket": "abcd",
  },
});
