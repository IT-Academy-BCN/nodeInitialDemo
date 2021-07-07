import playerModel from '../models/players.js';
import { checkError } from '../middlewares/errorHandler.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = async (req, res, next) => {
    const user = await playerModel.find({name: req.body.playerName}, '_id name');
    console.log(user);
    
    if(user.length === 0) return checkError(400, next);

    jwt.sign({ user: user }, process.env.SECRET_TOKEN, (err, token) => {
        req.user = user;
        res.json(token);
    });
}

export default createToken;

