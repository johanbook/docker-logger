const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 80;

const app = express();
app.use(logger("combined"));
app.use((req, res) => {
  res.send("Recieved");
});
app.listen(PORT, () => {
  console.log(`Listening for connections on port ${PORT}`);
});
