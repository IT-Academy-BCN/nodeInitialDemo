const Player = require('../models/player')
const Throw = require('../rollDices');

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
}

module.exports = { createPlayer,
                   updatePlayer,
                   rollDices,
                   deleteThrows }