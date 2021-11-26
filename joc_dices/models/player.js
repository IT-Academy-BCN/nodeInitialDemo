const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create player schema and model
const PlayerSchema = new Schema(
    {
        name: {type: String, default: 'Anonim', required: true},
        percentage: Number,
        totalThrows: Number,
        winThrows: Number,
        rolls: [{
            diceA: Number,
            diceB: Number,
            total: Number,
            win: Boolean,
        }]
    }, 
    {timestamps: true}
);

const Player = mongoose.model('player', PlayerSchema)

module.exports = Player;