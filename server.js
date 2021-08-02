const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const http = require("http");

const PORT = process.env.PORT || 80;

const app = express();

// Basic logger for request status, timestamp, etc
if (process.env.SUMMARY === "true" || process.env.SUMMARY === undefined) {
  app.use(logger("combined"));
}

app.use(bodyParser.json());

function printObject(obj, prefix = "") {
  if (typeof obj !== "object") {
    console.log(`${prefix} ${obj}`);
  }

  for (const [key, value] of Object.entries(obj)) {
    console.log(`${prefix}${key}: ${value}`);
  }
}

app.use((req, res, next) => {
  if (process.env.VERBOSE) {
    console.log(`\n[request]: ${req.method} ${req.originalUrl}`);
  }
  if (process.env.LOG_HEADERS) {
    printObject(req.headers, "[header] ");
  }

  if (process.env.LOG_BODY) {
    if (req.body) printObject(req.body, "[body] ");
    else console.log("[body] no body supplied");
  }

  next();
});

app.use((req, res) => {
  res.sendStatus(200);
});

const server = http.createServer(app);
if (process.env.LOG_RAW) {
  server.on("connection", (socket) => {
    socket.on("data", (chunk) => {
      console.log("\n");
      console.log(chunk.toString());
    });
  });
}

server.listen(PORT, () => {
  console.log(`Listening for connections on port ${PORT}`);
});
