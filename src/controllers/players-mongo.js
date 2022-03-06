import { Player } from '../models/player-mongo';

export const createNewPlayer = async (req, res) => {
    try {
        let name = req.body;
        name ? true : name = 'ANONYMOUS'
        let date = new Date().toLocaleDateString();

        const player = new Player({name, date})
        
        await player.save();
        console.log(player);
        res.status(200).json({ player })
    } catch (error) {
        res.status(500).send(console.log(error))
    };
};

export const playersGet = async (res, req) => {
    try {
        const data = await players.find({});
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({
            error
        });
    };
};

export const playerGetId = (req, res) => {
    const { id } = req.params;
    try {
        
    } catch (error) {
        res.status(500).json({
            error
        });
    };
};

export const playersPut = (req, res) => {
    res.json({
        msg: 'Funciona Put'
    });
};

export const playersDelete = (req, res) => {
    res.json({
        msg: 'Funciona Delete'
    });
};