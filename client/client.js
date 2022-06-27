const express = require("express");
const path = require("path");
const config = require("./config");
require ( 'dotenv' ).config();
const app = express();
const client = require("http").createServer(app);
const io = require("socket.io")(client);

app.use(express.static(path.join(__dirname + "/../client")));

client.listen(config.port, () => {
    console.log(`Server Front corriendo en ${config.port}`);
  });