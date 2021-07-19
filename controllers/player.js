const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
const Game = require("../models/Game");
const { Sequelize } = require("sequelize");
router.post("/", async (req, res) => {
	try {
		Player.create({
			username: req.body.username,
		}).then(user => {
			res.json(user);
		});
	} catch (err) {
		res.json(err);
	}
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const player = await Player.update(req.body, {
			where: { id },
		});
		if (player == 1) {
			res.send({
				message: "Player was updated successfully.",
			});
		} else {
			res.send({
				message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`,
			});
		}
	} catch (err) {
		res.status(500).send({
			message: "Error updating Tutorial with id=" + id,
		});
	}
});
router.get("/", async (req, res) => {
	let avgScore = await Game.findAll({
		include: [{ model: Player, attributes: ["username"] }],
		attributes: [[Sequelize.fn("AVG", Sequelize.col("won")), "avgScore"]],
		group: ["PlayerID"],
	});
	res.json(avgScore);
});

router.get("/:id/games", async (req, res) => {
	const players = await Player.findOne({
		where: { id: req.params.id },
		include: [{ model: Game }],
	});
	res.json(players);
});



module.exports = router;
