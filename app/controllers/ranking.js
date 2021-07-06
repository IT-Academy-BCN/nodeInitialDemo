import  playerModel  from '../models/players.js';
import { checkError } from '../middlewares/errorHandler.js';

const averagePlayers = async (req, res, next) => {

    const allGames = await playerModel.aggregate([
        {$unwind: "$games"},
        {$group: { 
            _id: null,
            average: { $avg:  "$games.won" }}},
        {$project: {_id:0, average: 1}}
    ]);

    if(allGames.average === null) return checkError(204, next);

     res.json(allGames);
}

const getLoser = async (req, res, next) => {

    const loser = await playerModel.aggregate([
        {$project: {
            player: "$name",
            average: { $avg: "$activePlayers.won"},
            _id: 0
        }},
        {$sort: { average: 1 }},
        {$limit: 1},
    ]);

    if(loser === null) return checkError(204, next);

    res.json(
        loser
    );
    next();
}

const getWinner = async (req, res, next) => {
    const winner = await playerModel.aggregate([
        {$project: {
            player: "$name",
            average: {$avg: "$games.won"},
            _id: 0
        }},
        {$sort: {
            average: -1
        }},
            {$limit: 1}
    ]);

    if(winner === null) return checkError(204, next);

    res.json(
        winner
    );
    next();
}

export {
    averagePlayers,
    getLoser,
    getWinner
}