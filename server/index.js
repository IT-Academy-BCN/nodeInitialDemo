const express = require("express");
const bodyParser = require("body-parser");

const users = require("./users/user.json");
const mario = require("./upload/mario.png");

const app = express();

app.get("/", (req, res) => {
  res.send([users, `Request url: ${req.url}`]);
});

app.post(bodyParser.raw({ type: "image/png", limit: "5mb" }), (req, res) => {
  res.send("ok mario");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server iniciado en puerto ${port}`);
});
