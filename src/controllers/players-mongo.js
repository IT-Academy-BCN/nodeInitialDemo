import { Player } from '../models/player-mongo';
import { rollDices } from '../models/dices';

export const createNewPlayer = async (req, res) => {
    console.log()

    try {
        let { name } = await req.body;
        name ? true : name = 'ANONYMOUS'
        let date = new Date().toLocaleDateString();

        const player = Player.create({ name, date })

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
        const players = await Player.find({});
        const numPlayers = players.lenght;
        let sumWinRates = 0;
        players.forEach(player =>
            sumWinRates += player.winRate
        );
        const generalWinRate = sumWinRates / numPlayers;
        res.status(200).json({
            generalWinRate
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
        player.winRate = parseFloat((
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
            player.winRate > max ? max = player.winRate : null);
        const betterPlayer = await Player.findOne({ winRate: max });
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
            player.winRate < min ? min = player.winRate : null);
        const worstPlayer = await Player.findOne({ winRate: min })
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
        player.winRate = 0;
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