const express = require("express");
const api = express.Router();

const { addNewPlayer , getAllPlayers, addPlayerGame, getAllGames, deletePlayerGames
    //ranking, 
} = require('../controllers/player');

api.post('/players', addNewPlayer)  // POST /players: crea un jugador
api.get('/players', getAllPlayers) // GET /players: retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits 
api.post('/players/:id/games', addPlayerGame) // POST /players/{id}/games: un jugador específic realitza una tirada
api.get('/players/:id/games', getAllGames) // GET /players/{id}/games: retorna el llistat de jugades per un jugador
//api.get('/players/ranking', ranking) // GET /players/ranking: retorna el percentatge mig d’èxits del conjunt de tots els jugadors
// api.put('/players/ranking', modifyPlayer) // PUT /players: modifica el nom del jugador
api.delete('/players/:id/games', deletePlayerGames) // DELETE /players/{id}/games: elimina les tirades del jugador
// api.get('/players/ranking/loser', loserPlayer) // GET /players/ranking/loser: retorna el jugador amb pitjor percentatge d’èxit
// api.get('/players/ranking/winner', winnerPlayer ) // GET /players/ranking/winner: retorna el jugador amb millor percentatge d’èxit


module.exports = api