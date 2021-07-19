const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
const Game = require("../models/Game");
const { Sequelize } = require("sequelize");


router.get("/ranking", async (req, res) => {
	const ranking = await Game.findAll({
		attributes: [
			[Sequelize.fn("AVG", Sequelize.col("won")), "avgRanking"],
			[Sequelize.fn("count", Sequelize.col("id")), "diceRollCount"],
		],
	});

	res.json(ranking);
});

router.get("/ranking/loser", async (req, res) => {
	const loser = await Game.findOne({
		include: [{ model: Player, attributes: ["username"] }],
		attributes: [[Sequelize.fn("AVG", Sequelize.col("won")), "avgScore"]],
		group: ["PlayerID"],
		order: [[Sequelize.fn("AVG", Sequelize.col("won"))]],
	});
	res.json(loser);
});

router.get("/ranking/winner", async (req, res) => {
	const loser = await Game.findOne({
		include: [{ model: Player, attributes: ["username"] }],
		attributes: [[Sequelize.fn("AVG", Sequelize.col("won")), "avgScore"]],
		group: ["PlayerID"],
		order: [[Sequelize.fn("AVG", Sequelize.col("won")),'DESC']],
	});
	res.json(loser);
});

module.exports = router;
