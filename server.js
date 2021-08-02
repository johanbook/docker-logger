const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 80;

const app = express();

// Basic logger for request status, timestamp, etc
if (process.env.SUMMARY || process.env.SUMMARY === undefined) {
  app.use(logger("combined"));
}

function printObject(obj, prefix = "") {
  if (!obj) return;
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

app.listen(PORT, () => {
  console.log(`Listening for connections on port ${PORT}`);
});
