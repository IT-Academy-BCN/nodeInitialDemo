import mongoose from 'mongoose';
import playerModel from '../models/players.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
    console.log('Conexión db correcta');
});

const player = new playerModel();

player._id = 1;
await player.save();

export { 
    player,
    db
}

