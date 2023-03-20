const express = require("express")
const { getPokemon } = require("../controllers/getPokemon")

const router = express.Router()

router.get("/pokemon/:id", getPokemon)

module.exports = router
