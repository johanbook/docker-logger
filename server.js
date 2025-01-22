const http = require("http");

const PORT = process.env.PORT || 8091;

const app = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OK");
};

const server = http.createServer(app);
server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    const date = new Date();
    console.log(date.toISOString());
    console.log(chunk.toString());
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}\n`));
