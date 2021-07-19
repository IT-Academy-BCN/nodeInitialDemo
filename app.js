const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const sequelize = require("./database/db");
require("./models/association");
const playerRouter = require("./controllers/player");
const gameRouter = require("./controllers/game");
const rankingRouter = require("./controllers/ranking");
app.use(express.json());
app.use("/players", gameRouter);
app.use("/players", playerRouter);
app.use("/players", rankingRouter);

app.listen(PORT, () => {
	console.log(` App runing on port http://localhost:${PORT}`);

	sequelize

		.sync({ force: false })
		.then(() => {
			console.log("Connection has been established successfully.");
		})
		.catch(err => {
			console.log("Oh no there is somthing went wrong" + err);
		});
});
