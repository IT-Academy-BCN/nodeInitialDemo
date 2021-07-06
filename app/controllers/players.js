import playerModel from '../models/players.js';
import { checkError } from '../middlewares/errorHandler.js';

const addPlayer = async (req, res, next) => {
    let playerName = req.body.playerName;

    if(playerName === undefined || playerName === '') playerName = 'anonimo' + Date.now();

    const newPlayer = await new playerModel({ 
        name: playerName
    });

    const player = await newPlayer.save()
    
    if (!player) return checkError(500, next, ' No se ha podido crear el usuario.');

    res.json({
        action: 'Player Created',
        playerId: newPlayer.id,
        playerName: newPlayer.name
    });
    next();
}

const showPlayers = async (req, res, next) => {
    
    const allPlayers = await playerModel.aggregate([
        {$project: {
            _id: 1, name: 1
        }}
    ]);

    if(allPlayers.length < 1) checkError(204, next);
    
    res.json(allPlayers);
    next();
}

const changeNamePlayer = async (req, res, next) => {  
    if(req.body.newPlayerName === undefined || req.body.playerId === undefined || req.body.newPlayerName === '' || req.body.playerId === '' ){
        return checkError(400, next);
    }
   
    const numberUpdatedItems = await playerModel.findByIdAndUpdate(req.body.playerId,{ name: req.body.newPlayerName});

    if(!numberUpdatedItems) return checkError(204, next);

    res.json({
        action: 'Player Updated',
    });
    next();
}

export {
    addPlayer,
    showPlayers,
    changeNamePlayer
}