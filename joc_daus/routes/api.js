const express = require('express');
const router = express.Router();
const Player = require('../models/player');
const { createPlayer,
        updatePlayer,
        rollDices,
        deleteThrows,
        getPercentage,
        getThrows,
        getPlayersPercentage } = require('../controllers/mongoControlllers')

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









// get a list of players
router.get('/getPlayers', function(req, res, next) {
    Player.find({}, {name:1}).then(function(player) {
        res.send(player);
    }).catch(next);
});

// get a full list of players
router.get('/getFullListPlayers', function(req, res, next) {
    Player.find({}).then(function(player) {
        res.send(player);
    }).catch(next);
});


//! delete a player
router.delete('/deletePlayer/:id', function(req, res, next) {
    Player.findOneAndDelete({
        _id: req.params.id}).then(function(player) {
        res.send(player)
    });
});

// !delete all players
router.delete('/deleteAllPlayers', function(req, res, next) {
    Player.deleteMany({})
        .then(function() {
        res.send("All players deleted...")
    }).catch(next)   
});

// get the players ranking
router.get('/getRanking', (req, res, next) => {
    Player.find({}, {_id:0, name:1, winThrows:1}).sort( {winThrows:-1} ).then( (ranking) => {
        res.send(ranking)
    });    
});



// get the number of throws from a player
router.get('/numberOfThrows/:id', (req, res, next) => {
    Player.findById( {_id: req.params.id}).then( (player) => {
        res.send("This player has: " + player.rolls.length + " throws");
    });
});   

// get number of wins from player
router.get('/numberOfWins/:id', (req, res, next) => {

    Player.findById(req.params.id, {

        name: 1,
        games_win: { 
            $sum: {
                $size: {
                    $filter: {
                        input: "$rolls.win",
                        cond: "$$this"
                    }
                }
            } 
        }
    }).then(player => {
        res.send(player)
    })
});



module.exports = router;
