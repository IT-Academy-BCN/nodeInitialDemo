import { Schema, model } from 'mongoose';

const PlayerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    date: String,
    totalGames: {
        type: Number,
        default: 0
    },
    gamesWon: {
        type: Number,
        default: 0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playHistory: [Object]
},
    { versionKey: false });

export const Player = model('Player', PlayerSchema);