import mongoose from 'mongoose';
const { Schema } = mongoose;

const playerSchema = new Schema ({
    _id: Number,
    name: { type: String, default: 'anonim' },
    games: [
        {
            id: Number,
            dice1: Number,
            dice2: Number,
            won: Number
        }
    ]
});

const playerModel = mongoose.model('Player', playerSchema);


export default playerModel;