const Jugador = require('../models/jugador_mysql.js');

const obtenerRanking = async (req, res) => {
    try {
    // Esto devuelve el ranking en orden DESCendente
        const ranking = await Jugador.findAll({
            attributes: ["id", "userName", "exitoPorcentaje"],
            order: [["exitoPorcentaje", "DESC"]],
        });
    // Para saber el promedio de éxito de todxs lxs jugadorxs
    const totalJugadores = await Jugador.count();
    const sumaExitoPorcentaje = await Jugador.sum("exitoPorcentaje");
    const promedioExito = sumaExitoPorcentaje / totalJugadores;

    res.status(200).json({
        "Ranking de jugadores": ranking,
        "Promedio de éxito de todos los jugadores": promedioExito,
    });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
};

// Jugador con el peor resultado de éxitos
const obtenerPerdedor = async (req, res) => {
    try {
// Esto devuelve UN solo resultado en orden ASCendente; por tanto, el peor.
        const perdedor = await Jugador.findOne({
            attributes: ["id", "userName", "exitoPorcentaje"],
            order: [["exitoPorcentaje", "ASC"]],
        });
    res.status(200).json({"El perdedor es": perdedor });
} catch (err) {
    res.status(500).json ({ message: err.message});
}
};

// Jugador con el mejor resultado de éxitos

const obtenerGanador = async (req, res) => {
    try {
// Esto devuelve UN solo resultado en orden ASCendente; por tanto, el peor.
        const ganador = await Jugador.findOne({
            attributes: ["id", "userName", "exitoPorcentaje"],
            order: [["exitoPorcentaje", "DESC"]],
        });
    res.status(200).json({"El ganador es": ganador });
} catch (err) {
    res.status(500).json ({ message: err.message});
}
};

module.exports = {
    obtenerRanking,
    obtenerPerdedor,
    obtenerGanador
}