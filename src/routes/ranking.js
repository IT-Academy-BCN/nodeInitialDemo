const express = require('express');
const router = express.Router();

// Importar controllers
const { obtenerRanking, obtenerPerdedor, obtenerGanador } = require('../controllers/ranking.js');

// GET/ranking
router.get('/ranking', obtenerRanking);

// GET/ranking/perdedor
router.get('/ranking/perdedor', obtenerPerdedor);

// GET/ranking/ganador
router.get('/ranking/ganador', obtenerGanador);

module.exports = router;


