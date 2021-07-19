const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

router.post("/:id/games", async (req, res) => {
	console.log(req.params.id);
	const a = Math.floor(Math.random() * 7) + 1;
	const b = Math.floor(Math.random() * 7) + 1;
	const result = a + b;
	let won = 0;
	if (result === 7) won = 1;
	await Game.create({
		PlayerId: req.params.id,
		dice1: a,
		dice2: b,
		won: won,
	}).then(user => {
		res.json(user);
	});
});
router.delete("/:id/games", async (req, res) => {
	const PlayerId = req.params.id;
	const user = await Game.destroy({
		where: { PlayerId: PlayerId },
	});

	res.json({ message: `ID ${PlayerId} rolls deleted successfully` });
});

module.exports = router;
