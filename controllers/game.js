const Game = require("../models/Game");

exports.createGame = async (req, res) => {
	console.log(req.params.id);
	const a = Math.floor(Math.random() * 7) + 1;
	const b = Math.floor(Math.random() * 7) + 1;
	const result = a + b;
	let won = 0;
	if (result === 7) won = 1;
	try {
		const game = await Game.create({
			PlayerId: req.params.id,
			dice1: a,
			dice2: b,
			won: won,
		});
		if (!game) {
			res.status(400).json({
				message:
					"Failed to create game beacuse PlayerId does not match with " +
					req.params.id,
			});
		}
		res
			.status(201)
			.json({ game, message: "Game has been created successfully" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
exports.deletePlayerRolls = async (req, res) => {
	const PlayerId = req.params.id;
	const user = await Game.destroy({
		where: { PlayerId: PlayerId },
	});

	res
		.status(204)
		.json({ message: `ID ${PlayerId} rolls deleted successfully` });
};
