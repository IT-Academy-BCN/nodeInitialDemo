const Player = require('../models/player');
const percent = require('../utilities/percentage');

async function updatePercentage(id, player) {
    try {
        const wins = player.winThrows;
        const throws = player.totalThrows;
        const percentage = await percent.calculatePercentage(wins, throws)

        const update = {percentage: percentage};
        await Player.findByIdAndUpdate( {_id:id}, update, {new: true});

    } catch (err) {
        console.log({ message: err.message})
    }
};

module.exports = { "updatePercentage": updatePercentage } ;

    