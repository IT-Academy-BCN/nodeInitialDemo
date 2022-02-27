const express = require('express');
const router = express.Router();

const { createPlayer,
        updatePlayer,
        rollDices,
        deleteThrows,
        getPercentage,
        getThrows,
        getPlayersPercentage,
        getBestPlayer,
        getWorstPlayer } = require('../controllers/sqlControllers')

// add a new player 
router.post('/newPlayer', createPlayer);

// update a player
router.put('/updatePlayer/:id', updatePlayer);

// rollDices! a player throws the dices amb get a new throw
router.post('/rollDices/:id', rollDices);

// delete all throws from a player
router.delete('/deleteAllThrows/:id', deleteThrows);

// get winning percentage from all players
router.get('/getPercentage', getPercentage);

// get all Throws from a player
router.get('/getThrows/:id', getThrows);

// get win percentage from all players
router.get('/getPlayersPercentage', getPlayersPercentage);

// get the best player of ranking
router.get('/getPlayers/winner', getBestPlayer);

// get the worst player of ranking
router.get('/getPlayers/loser', getWorstPlayer);


module.exports = router;
