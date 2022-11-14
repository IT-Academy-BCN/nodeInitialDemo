const express = require('express');
const router = express.Router()

const playerClass = require('../helpers/player');
const players = new playerClass("")

// GET ranking organized by individual and average success %
router.get('/', async (req, res) => {
    let playerList = await players.orderPlayers()

    res.status(200)
    res.json(playerList)
})
// GET loser player with less success %
router.get('/loser', async (req, res) => {
    let playerLoser = await players.getLoser()

    res.status(200)
    res.json(playerLoser)
})
// GET winner player with most success %
router.get('/winner', async (req, res) => {
    let playerLoser = await players.getWinner()

    res.status(200)
    res.json(playerLoser)
})

module.exports = router