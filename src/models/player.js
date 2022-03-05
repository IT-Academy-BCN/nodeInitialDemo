import { Schema, model } from 'mongoose';

const PlayerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        default:'ANONYMOUS'
    },
    password: {
        type: String,
        require: true
    }
});

export const model = model('player', PlayerSchema);