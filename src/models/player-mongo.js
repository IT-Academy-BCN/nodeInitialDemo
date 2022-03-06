import { Schema, model } from 'mongoose';

const PlayerSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    date: String,
    totalGames: {
        type: Number,
        default: 0
    },
    gamesWon: {
        type: Number,
        default:0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playHistory: [Object]
});

export const Player = model('Player', PlayerSchema);