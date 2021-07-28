const Player = require("../models/Player");
const Game = require("../models/Game");
const { Sequelize } = require("sequelize");

exports.create = async (req, res) => {
	let username = req.body.username;
	if (username === undefined || username === "")
		username = "ANONYMOUS" + Date.now();
	try {
		const findUser = await Player.findOne({ where: { username: username } });
		if (findUser) {
			if (findUser.username === username) {
				return res.json({ username:` ${username} alreday in use` });
			}
		}
		const user = await Player.create({ username: username });
		// you can now access the newly created user
		res.status(201).json({ user: user });
	} catch (err) {
		// print the error details
		res
			.status(400)
			.json({ error: err.original.sqlMessage, username: req.body.username });
	}
};
exports.update = async (req, res) => {
	const id = req.params.id;

	try {
		const player = await Player.update(req.body, {
			where: { id },
		});
		console.log(player);
		if (player == 1) {
			res.status(202).json({
				message: "Player was updated successfully.",
			});
		} else {
			res.status(404).json({
				message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`,
			});
		}
	} catch (err) {
		res.status(500).json({
			message: "Error updating Tutorial with id=" + id,
		});
	}
};
exports.getAvgScore = async (req, res) => {
	try {
		let avgScore = await Player.findAll({
			include: [{ model: Game, attributes: [] }],
			attributes: [
				[Sequelize.fn("AVG", Sequelize.col("games.won")), "avgScore"],
				[Sequelize.col("username"), "username"],
			],
			group: ["username"],
			raw: true,
		});

		res.status(200).json({ playersAvgScore: avgScore });
	} catch (err) {
		res.status(400).json({ error: err });
	}
};

exports.getPlayerRolls = async (req, res) => {
	const { id } = req.params;
	const player = await Player.findOne({
		where: { id: id },
		include: [{ model: Game }],
	});
	try {
		if (!player) {
			res
				.status(404)
				.json({ message: "Player not found with the given id " + id });
		}
		res.status(302).json({ player_rolls: player });
	} catch (err) {
		res.json(err.message);
	}
};
