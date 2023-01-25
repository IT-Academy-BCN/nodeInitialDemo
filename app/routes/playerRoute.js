const express = require('express');
const router = express.Router()

const playerClass = require('../helpers/player');


// GET return player list
router.get('/', async (req, res) => {
    try {
        const Player = new playerClass()
        const playerList = await Player.getPlayers()

        console.log(playerList)

        if(!playerList.length) {
            res.status(400).json('No players registered yet!')
        } else {
            res.status(200).json(playerList)
        }
    } catch (err) { console.log(err), res.send(500) }
});


// POST create player
router.post('/', async (req, res) => {
    try {
        let newUsername = req.body.username
        const Player = new playerClass(newUsername)
        const userConfirmation = await Player.createPlayer()
        
        if(userConfirmation) {
            res.status(200).json(userConfirmation)
        } else {
            res.status(400).json(`${newUsername} already registered`)
        }

    } catch (err) { console.log(err), res.send(500)}
});


// PUT modify player
router.put('/:id', async (req, res) => {
    try {
        let currentUsername = req.params.id
        const newUsername = req.body.username

        const user = new playerClass(currentUsername)
        const changeUser = await user.modifyPlayer(newUsername)
        
        res.send(changeUser)

    } catch (err) { console.log(err) }
})

module.exports = router