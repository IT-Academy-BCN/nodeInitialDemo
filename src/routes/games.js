const express = require('express');
const router = express.Router();

//Importar controllers
const { hacerTirada, borrarTiradas, tiradasJugador } = require('../controllers/games.js');

//Tirada de unx jugadorx
router.post('/games/:id', hacerTirada);

//Borrar tirada de unx jugadorx
router.delete('/games/:id', borrarTiradas);

//Tiradas/ x jugadorx
router.get('/games/:id', tiradasJugador);

module.exports = router;