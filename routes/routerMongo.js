const
express = require('express'),
jocAPI = express.Router(),
{ 
  addNewPlayer,
  getAllPlayers,
  modifyPlayerName,
  playerRollDices,
  deleteGames,
  playerGamesList,
  generalRanking,
  getBetterPlayer,
  getWorstPlayer

 } = require('../controllers/controllersDice')



jocAPI.post('/players', addNewPlayer) //POST  crea un jugador
jocAPI.post('/players/:id/games', playerRollDices) //POST /players/{id}/games: un jugador específic realitza una tirada
jocAPI.put('/players/:id', modifyPlayerName) //PUT  modifica el nom del jugador
jocAPI.delete('/players/:id/games', deleteGames) // DELETE /players/{id}/games: elimina les tirades del jugador
jocAPI.get('/players', getAllPlayers)//GET : retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits
jocAPI.get('/players/:id/games', playerGamesList)//GET /players/{id}/games: retorna el llistat de jugades per un jugador.
jocAPI.get('/players/ranking', generalRanking) //GET : retorna el percentatge mig d’èxits del conjunt de tots els jugadors
jocAPI.get('/players/ranking/loser', getWorstPlayer )//GET : retorna el jugador amb pitjor percentatge d’èxit
jocAPI.get('/players/ranking/winner', getBetterPlayer)//GET : retorna el jugador amb millor percentatge d’èxit 



module.exports = jocAPI