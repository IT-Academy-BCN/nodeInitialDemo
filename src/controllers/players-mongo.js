import { Player } from '../models/player-mongo';
import { rollDices } from '../models/dices';

export const createPlayer = async (req, res) => {
    console.log()

    try {
        let { name } = await req.body;
        name ? true : name = 'ANONYMOUS'
        let date = new Date().toLocaleDateString();

        const player = await Player.create({ name, date })

        res.status(200).json({ player })
    } catch (error) {
        res.status(500).send(error)
    };
};

export const playersGet = async (req, res) => {
    try {
        const players = await Player.find({});
        const response = players.map(player => {
            const obj = {
                _id: player._id,
                player: player.name,
                wonRate: player.wonRate
            }
            return obj;
        });
        res.status(200).json({ players: response });
    } catch (error) {
        res.status(500).json({
            error
        });
    };
};

export const playerGetId = async (req, res) => {
    const id = req.params.id;
    try {
        const player = await Player.findById({ _id: id });
        res.status(200).json({
            player: player.name,
            rollList: player.playHistory
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    };
};

export const generalRanking = async (req, res) => {
    try {
        const players = await Player.find({}).sort({ wonRate: -1 });
        res.status(200).json({
            players
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    };
};

export const modifyPlayerName = async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    try {
        const player = await Player.findById({ _id: id });
        player.name = name;
        const playerUpdate = await player.save();
        res.status(200).json({ playerUpdate })
    } catch (error) {
        res.status(500).json(error);
    };
};

export const playerRollDices = async (req, res) => {
    const id = req.params.id;
    const game = rollDices();

    try {
        const player = await Player.findById({ _id: id });
        player.totalGames++;
        if (game.veredict === 'win') {
            player.gamesWon++
        };
        player.playHistory.push(game);
        player.wonRate = parseFloat((
            (player.gamesWon / player.totalGames) * 100).toFixed(2));
        await player.save();
        res.status(200).json({
            name: player.name,
            rolled: game
        });
    } catch (error) {
        console.log(error)
    };
};

export const getBetterPlayer = async (req, res) => {
    try {
        const players = await Player.find({});
        let max = 0;
        players.forEach(player =>
            player.wonRate > max ? max = player.wonRate : null);
        const betterPlayer = await Player.findOne({ wonRate: max });
        res.status(200).json({
            betterPlayer
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    };
};

export const getWorstPlayer = async (req, res) => {
    try {
        const players = await Player.find({});
        let min = 100;
        players.forEach(player =>
            player.wonRate < min ? min = player.wonRate : null);
        const worstPlayer = await Player.findOne({ wonRate: min })
        res.status(200).json({
            worstPlayer
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    };
};

export const deleteGames = async (req, res) => {
    const id = req.params.id;
    try {
        const player = await Player.findById({ _id: id });
        player.totalGames = 0;
        player.gamesWon = 0;
        player.wonRate = 0;
        player.playHistory = [];
        await player.save();
        res.status(200).json({
            message: 'Game removed',
            player
        });
    } catch (error) {
        res.status(404).json({
            msg: 'Player not found'
        });
    };
};