const express = require("express");
const router = express.Router();
const { createGame, deletePlayerRolls } = require("../controllers/game");

router.post("/:id/games", createGame);
router.delete("/:id/games", deletePlayerRolls);

module.exports = router;
