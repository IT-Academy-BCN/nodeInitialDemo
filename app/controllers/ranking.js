import { Game, sequelize } from '../config/dbManager.js';
import { checkError } from '../middlewares/errorHandler.js';

const averagePlayers = async (req, res, next) => {
    const allGames = await Game.findAll({
            attributes: [[sequelize.fn('avg', sequelize.literal('won * 100')), 'media']],
            raw: true
         });

    if(allGames[0].media === null) return checkError(204, next);

     res.json(allGames);
}

const getLoser = async (req, res, next) => {
    const result = await sequelize.query('SELECT MIN(av) AS loser FROM (SELECT AVG(g.won), p.name AS av FROM games g JOIN players p ON p.id = g.playerId GROUP BY playerId) x', { raw: true });

    if(result[0][0].loser === null) return checkError(204, next);

    res.json(
        result[0]
    );
    next();
}

const getWinner = async (req, res, next) => {
    const result = await sequelize.query('SELECT MAX(av) AS winner FROM (SELECT AVG(g.won), p.name AS av FROM games g JOIN players p ON p.id = g.playerId GROUP BY playerId) x', { raw: true });

    if(result[0][0].winner === null) return checkError(204, next);

    res.json(
        result[0]
    );
    next();
}

export {
    averagePlayers,
    getLoser,
    getWinner
}