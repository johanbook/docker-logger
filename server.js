const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 80;

const app = express();

app.use((req, res) => {
  res.sendStatus(200);
});

const server = http.createServer(app);
if (process.env.LOG_RAW) {
  server.on("connection", (socket) => {
    socket.on("data", (chunk) => {
      const date = new Date();
      console.log(date.toISOString());
      console.log(chunk.toString());
    });
  });
}

server.listen(PORT, () => console.log(`Listening on port ${PORT}\n`));
