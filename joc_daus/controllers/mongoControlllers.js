const Player = require('../models/player');
const Throw = require('../rollDices');
const percentage = require('../utils/updatePercentage');
const throws = require('../utils/updateThrows')
const wins = require('../utils/updateWins')

const createPlayer = async (req, res) => {
    
    try {
        const name = req.body.name
        const user = await Player.findOne({ name: name });
            if (!user) {
                const player = await Player.create({ name: name });
                res.send(player);     
            } else {
                res.send({ message: "Player already exists!"});
            }
    } catch (err) {
        res.send({ message: err.message})
    }  
};

const updatePlayer = async (req, res) => {

    try {
        const id = req.params.id;
        const name = req.body;
        const player = await Player.findOneAndUpdate({_id: id}, name)
        res.send(player)    
    } catch (err) {
        res.send({ message: err.message})
    }
};

const rollDices = async (req, res) => {

    try {
        const id = req.params.id;
        const player = await Player.findOneAndUpdate( {_id:id}, { $push: { rolls: [Throw.roll()] } } )
        await throws.updateThrows(id, player);
        await wins.updateWins(id);
        await percentage.updatePercentage(id, player);
        res.send(player);
    } catch (err) {
        console.log({ message: err.message})
    }
};

const deleteThrows = async (req, res) => {
    try {
        const id = req.params.id;
        const player = await Player.findOneAndUpdate({_id:id}, { $pull: { rolls: {} } } )
        res.send(`All throws from ${player.name} are deleted!`)
    } catch(err) {
        console.log({ message: err.message});
    }
};

const getPercentage = async (req, res) => {
    
    try {
        const players = await Player.find().sort({percentage: 1})
        const playerList = players.map( player => {
            const obj = {
                _id: player.id,
                player: player.name,
                percentage: player.percentage
            }
            return obj
        })
        res.status(200).send({ players: playerList})
    } catch (err) {
        console.log({ message: err.message});
    }  
};

module.exports = { createPlayer,
                   updatePlayer,
                   rollDices,
                   deleteThrows,
                   getPercentage }