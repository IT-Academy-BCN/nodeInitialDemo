const express = require("express");
const router = express.Router();
const { getRanking, getWinner, getLoser } = require("../controllers/ranking");
router.get("/ranking/", getRanking);
router.get("/ranking/winner", getWinner);
router.get("/ranking/loser", getLoser);

module.exports = router;
