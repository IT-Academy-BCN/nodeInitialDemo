const express = require('express');
const router = express.Router();
//IMPORTS
const {
    crearJugador, modificarNombreJugador, listaJugadores
} = require('../controllers/players.js');

// ENDPOINTS
//POST/players: crear jugador
router.post('/players', crearJugador);

// PUT /players: modificar nombre jugadorx
router.put('/players/:id', modificarNombreJugador); 

// GET/ listaJugadores
router.get('/players', listaJugadores); 



// GET /players: devuelve el listado de todxs lxs jugadorxs del sistema con su porcentaje medio de logros
//router.get('/players', listaJugadores);


module.exports = router; 