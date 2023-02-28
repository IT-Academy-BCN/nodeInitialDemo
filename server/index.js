const express = require("express");
const bodyParser = require("body-parser");
// npm multer ***************************************************
const users = require("./users/user.json");

const app = express();

app.get("/", (req, res) => {
  res.send([users, `Request url: ${req.url}`]);
});

app.post("./img", (req, res) => {});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server iniciado en puerto ${port}`);
});
