import { player, db }from '../config/dbManager.js';
import { checkError } from '../middlewares/errorHandler.js';

const addPlayer = async (req, res, next) => {
    let playerName = req.body.playerName;

    if(playerName === undefined || playerName === '') playerName = 'anonimo' + Date.now();

    const newPlayer = await Player.create({ 
        name: playerName
    });

    if(newPlayer.length < 1) return checkError(500, next, ' No se ha podido crear el usuario.');

    res.json({
        action: 'Player Created',
        playerId: newPlayer.id,
        playerName: newPlayer.name
    });
    next();
}

const showPlayers = async (req, res, next) => {
    const allPlayers = Object.values(await Player.findAll( 
        {
            include: [
                {
                    model: Game,
                    attributes: [],
                    required: true
                }
            ], 
            attributes: ['name', [sequelize.fn('avg', sequelize.literal('games.won * 100')), 'media']],
            group: 'playerId',
            raw: true
        }
     ));

    if(allPlayers.length < 1) checkError(204, next);
    
    res.json(allPlayers);
    next();
}

const changeNamePlayer = async (req, res, next) => {  
    if(req.body.newPlayerName === undefined || req.body.playerId === undefined || req.body.newPlayerName === '' || req.body.playerId === '' ){
        return checkError(400, next);
    }
   
    const updatedItem = await Player.update({
        name: req.body.newPlayerName
    },{ 
        where: { 
            id: req.body.playerId 
        } 
    });

    if(updatedItem[0] === 0) return checkError(204, next);

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