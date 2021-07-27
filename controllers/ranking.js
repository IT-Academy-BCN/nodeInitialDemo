const Player = require("../models/Player");
const Game = require("../models/Game");
const { Sequelize } = require("sequelize");

exports.getRanking = async (req, res) => {
	try {
		const ranking = await Game.findAll({
			attributes: [
				[Sequelize.fn("AVG", Sequelize.col("won")), "avgRanking"],
				[Sequelize.fn("count", Sequelize.col("id")), "diceRollCount"],
			],
		});

		res.status(302).json({ ranking: ranking });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.getWinner = async (req, res) => {
	const winner = await Game.findOne({
		include: [{ model: Player, attributes: ["username"] }],
		attributes: [[Sequelize.fn("AVG", Sequelize.col("won")), "avgScore"]],
		group: ["PlayerID"],
		order: [[Sequelize.fn("AVG", Sequelize.col("won")), "DESC"]],
	});
	res.status(302).json({ winner: winner });
};

exports.getLoser = async (req, res) => {
	const loser = await Game.findOne({
		include: [{ model: Player, attributes: ["username"] }],
		attributes: [[Sequelize.fn("AVG", Sequelize.col("won")), "avgScore"]],
		group: ["PlayerID"],
		order: [[Sequelize.fn("AVG", Sequelize.col("won"))]],
	});
	res.status(302).json({ loser: loser });
};
