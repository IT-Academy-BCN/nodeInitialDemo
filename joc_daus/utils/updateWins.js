const Player = require('../models/player');

async function updateWins(id) {
    try {
        const player = await Player.findById({_id:id}, {
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
        var numberOfWins = JSON.stringify(player);
        var numberWins = JSON.parse(numberOfWins);
        var winThrows = numberWins.games_win;
        var winNum = parseInt(winThrows);
        const update = { winThrows: winNum };
        await Player.findByIdAndUpdate({_id:id}, update, {new: true});
    } catch (err) {
        console.log({ message: err.message})
    }
};

module.exports = { "updateWins": updateWins };