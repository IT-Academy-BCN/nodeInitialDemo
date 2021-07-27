const express = require("express");
const app = express();
const path = require("path");
var mysql = require("mysql");
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


app.use("/", (req, res) => {
	let sql = "CREATE DATABASE rest_api";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.end("Database created");
	});
});
module.exports = app;
