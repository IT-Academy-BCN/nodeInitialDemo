const express = require('express');
const router = express.Router();
const Player = require('../models/player');
const CP = require('../percentage');
const Throw = require('../rollDices');

// add a new player 
router.post('/newPlayer', function(req, res, next) {
    var body = req.body;
    Player.findOne({}, { name: req.body.name }, (err, user) => {
        if (user.name) {
            console.log(user)
            res.send({ message: "player all ready exists!"})
        } else if (err) {
                res.status(400).send("Error on database")
        } else {
            Player.create(req.body).then(function(player) {
                res.send(player)
            }).catch(next);
        }
    });
});  

// get a player by ID
router.get('/getPlayer/:id', function(req, res, next) {
    Player.find({_id: req.params.id}).then(function(player) {
        res.send(player);
    }).catch(next);
});

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

//? update a player
router.put('/updatePlayer/:id', function(req, res, next) {
    Player.findOneAndUpdate({_id: req.params.id}, req.body).then(function(player) {
        Player.findOne({
            _id: req.params.id}).then(function(player) {
            res.send(player);
        });
    });
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


// rollDices! a player throws the dices amb get a new game throw
router.put('/rollDices/:id', (req, res, next) => {
    Player.findOneAndUpdate( {_id: req.params.id}, { $push: { rolls: [Throw.roll()] } } ).then( (player) => {
        res.send(player);
    })
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


//! delete all throws from a player
router.put('/deleteAllThrows/:id', (req, res, next) => { 
        Player.findOneAndUpdate({_id: req.params.id}, { $pull: { rolls: {} } } )
        .then( (player) => {
            Player.findOne({_id: req.params.id})
        .then( (player) => {
            res.send(player)
        }).catch(next)
    });
});

//? update winning percentage
router.put('/updatePercentage/:id', (req, res, next) => {
    Player.findById({_id: req.params.id}).then( (player) => {
        let wins = player.winThrows;
        let throws = player.totalThrows;
        Player.findOneAndUpdate( {_id: req.params.id}, { $set: { percentage: CP.calculatePercentage(wins, throws)} } ) 
        .then( (player) => {
            res.send( "Player "+player.name+" has a: "+ player.percentage +" % of wins");
        });
    });
});

//? Update player number of throws
router.put('/insertThrows/:id', (req, res, next) => {
    Player.findById({_id: req.params.id})
    .then( (player) => {
        Player.findOneAndUpdate({_id: req.params.id}, { $set: { totalThrows: player.rolls.length} })
        .then(player => {
            res.send(player);
        });
    });
});

//? Update number of wins from player
router.put('/insertWins/:id', (req, res, next) => {

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
        })
        .then(playerWins => {
            var numberOfWins = JSON.stringify(playerWins);
            var numberWins = JSON.parse(numberOfWins);
            var winThrows = numberWins.games_win;
            var winNum = parseInt(winThrows);
            Player.findOneAndUpdate({_id: req.params.id}, { $set: { winThrows: winNum} })
                .then(player => {
                    res.send(player)
                });
        }); 
 
});

module.exports = router;
