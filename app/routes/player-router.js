/* eslint-disable import/no-dynamic-require */
/* eslint-disable max-len */
const express = require('express');
const { controllersByEnv } = require('../../config');

const router = express.Router();
const {
  createUser, modifyPlayerName, cleanGameLog, makeAPlay, playersList, individualPlayerSuccessRate, playersAndSuccessRateList, winner, looser, successRateAvg,
} = require(controllersByEnv);

// POST /players: crea un jugador
router.post('/', createUser);

// PUT /players: modifica el nombre del jugador
router.put('/:playerId', modifyPlayerName);

// DELETE /players/{id}/games: elimina las tiradas del jugador
router.delete('/:playerId/games', cleanGameLog);

// POST /players/{id}/games: un jugador específico realiza un tirón

router.post('/:playerId/games', makeAPlay);

// GET /players/{id}/games: devuelve el listado de jugadas por un jugador.
router.get('/:playerId/games', playersList);

// Devuelve el porcentaje de exito de un jugador especifico
router.get('/:playerId/games/rate', individualPlayerSuccessRate);

// GET /players: devuelve el listado de todos los jugadores del sistema con su porcentaje medio de logros
router.get('/', playersAndSuccessRateList);

// GET /players/ranking/winner: devuelve al jugador con mejor porcentaje de éxito
router.get('/ranking/winner', winner);

// GET /players/ranking/loser: devuelve al jugador con peor porcentaje de éxito
router.get('/ranking/loser', looser);

// GET /players/ranking: devuelve el porcentaje medio de logros del conjunto de todos los jugadores
router.get('/ranking', successRateAvg);

module.exports = router;
