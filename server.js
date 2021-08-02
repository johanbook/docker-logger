const express = require("express");
const logger = require("morgan");

const PORT = 5000;

const app = express();
app.use(logger("combined"));
app.use((req, res) => {
  res.send("Recieved");
});
app.listen(PORT, () => {
  console.log("Listening for connections");
});
