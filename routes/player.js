const express = require("express");
const router = express.Router();
const {
	create,
	update,
	getAvgScore,
	getPlayerRolls,
} = require("../controllers/player");
router.post("/", create);
router.put("/:id", update);
router.get("/", getAvgScore);
router.get("/:id/games", getPlayerRolls);
module.exports = router;
