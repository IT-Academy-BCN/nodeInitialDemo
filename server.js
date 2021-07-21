const express = require("express");
const app = express();
require("./models/association");
const playerRouter = require("./routes/player");
const gameRouter = require("./routes/game");
const rankingRouter = require("./routes/ranking");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/players", gameRouter);
app.use("/players", playerRouter);
app.use("/players", rankingRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
