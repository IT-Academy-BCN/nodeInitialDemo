import mongoose from 'mongoose';
const { Schema } = mongoose;

const modelName = 'Player';

const playerSchema = new Schema ({
    name: { 
        type: String,
        required: true,
        unique: true, 
        default: 'anonim' 
    },
    games: [
        {
            _id: false,
            dice1: {
                type: Number
            }, 
            dice2: {
                type: Number
            }, 
            won:{
                type: Number
            } 
        }
    ]
});

const playerModel = mongoose.model(modelName, playerSchema);

export default playerModel;