const Player = require('../models/player');

async function updateThrows(id, player) {
    try {
        const update = {totalThrows: player.rolls.length + 1};
        await Player.findByIdAndUpdate({_id:id}, update, {new: true});
    }   catch (err) {
        console.log({ message: err.message})
    }
};

module.exports = { "updateThrows": updateThrows } ;