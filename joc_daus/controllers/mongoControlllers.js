const Player = require('../models/player')

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


module.exports = { createPlayer,
                   updatePlayer }