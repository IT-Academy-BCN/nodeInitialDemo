import  playerModel  from '../models/players.js';
import { checkError } from '../middlewares/errorHandler.js';

const playGame = async (req, res, next) => {

    if(!/([0-9A-F]{24}$)/i.test(req.params.id)){
        return checkError(400, next);
    }

    const completeGame = {
        won: 0,
        dice1: parseInt(6 * Math.random() + 1),
        dice2: parseInt(6 * Math.random() + 1),
        gameResult: 0
    }

    completeGame.gameResult = completeGame.dice1 + completeGame.dice2;

    if(completeGame.gameResult === 7) completeGame.won = 1;

    const playerUpdated = await playerModel.findByIdAndUpdate(req.params.id, { $push: { games: completeGame }});

    if(playerUpdated === null) return checkError(204, next);

    res.json({
        action: "Nueva tirada de dados",
        playerId: playerUpdated._id,
        dice1: completeGame.dice1,
        dice2: completeGame.dice2,
        gameResult: completeGame.gameResult,
        won: completeGame.won
    });
    next();
}

const getPlayerGames = async (req, res, next) => {
    if(!/([0-9A-F]{24}$)/i.test(req.params.id)){
        return checkError(400, next);
    }

    const player = await playerModel.findOne({ _id: req.params.id });

    if(player.games.length < 1) return checkError(204, next);
    
    res.json(player.games);
    next();  
}

const deletePlayerGames = async (req, res, next) => {
    if(!/([0-9A-F]{24}$)/i.test(req.params.id)){
        return checkError(400, next);
    }
    
    const playerUpdated = await playerModel.findByIdAndUpdate(req.params.id, { $set: { games: [] }});

    if(playerUpdated === null) return checkError(204, next);

    res.json({
        action: "All games deleted"
    });
    next();
}

export {
    playGame,
    getPlayerGames,
    deletePlayerGames
}