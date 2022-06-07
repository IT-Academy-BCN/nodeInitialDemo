const express = require("express");
const api = express.Router();

const { addNewPlayer, getAllPlayers, addPlayerGame, getAllGames, ranking, modifyNamePlayerController, loserPlayer, deletePlayerGames, winnerPlayer } = require('../controllers/player');

api.post('/players', addNewPlayer)  // POST /players: crea un jugador
api.get('/players', getAllPlayers) // GET /players: retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits 
api.post('/games/:id', addPlayerGame) // POST /games/{id}: un jugador específic realitza una tirada
api.get('/games/:id', getAllGames) // GET /games/{id}: retorna el llistat de jugades per un jugador
api.get('/ranking', ranking) // GET /ranking: retorna un ranking de jugadors ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors
api.put('/players/:id', modifyNamePlayerController) // PUT players/{id}: modifica el nom del jugador
api.delete('/games/:id', deletePlayerGames) // DELETE /games/{id}: elimina les tirades del jugador
 api.get('/ranking/loser', loserPlayer) // GET /ranking/loser: retorna el jugador amb pitjor percentatge d’èxit
 api.get('/ranking/winner', winnerPlayer ) // GET /ranking/winner: retorna el jugador amb millor percentatge d’èxit


module.exports = api

