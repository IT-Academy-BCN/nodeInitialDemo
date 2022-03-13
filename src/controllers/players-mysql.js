import sequelize from 'sequelize';
import { Player, Roll } from '../models/player-mysql';
import rollDices from '../models/dices';
import crypto from 'crypto';

export const createNewPlayer = async (req, res) => {
    try {
        let { name } = req.body;
        name ? true : NAME === 'ANONYMOUS';
        const playerStored = await Player.create({ name });
        res.status(200).json({
            player: playerStored
        });
    } catch (error) {
        res.status(500).json({ error })
    }
};

export const playersGet = async (req, res) => {
    try {
        const players = await Player.findAll({
            attributes: ['id', 'name', 'winRate'],
            include: [roll]
        });
        res.status(200).json({
            players
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const modifyPlayerName = async (req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;
        await Player.update({ name }, { where: { id: id } });
        res.status(200).json({
            player
        });
    } catch (error) {
        res.status(400).json({
            error: 'Player not found'
        });
    };
};