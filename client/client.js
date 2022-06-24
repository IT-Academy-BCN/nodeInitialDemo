const express = require("express");
const path = require("path");

const app = express();
const client = require("http").createServer(app);
const io = require("socket.io")(client);

app.use(express.static(path.join(__dirname + "/../client")));

client.listen(5001);