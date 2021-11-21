const
express = require('express'),
jocAPI = express.Router()



jocAPI.post('/players') //POST  crea un jugador
jocAPI.put('/players') //PUT  modifica el nom del jugador
jocAPI.post('/players/:id/games') //POST /players/{id}/games: un jugador específic realitza una tirada
jocAPI.delete('/players/:id/games') // DELETE /players/{id}/games: elimina les tirades del jugador
jocAPI.get('/players')//GET : retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits
jocAPI.get('/players/:id/games')//GET /players/{id}/games: retorna el llistat de jugades per un jugador.
jocAPI.get('/players/ranking') //GET : retorna el percentatge mig d’èxits del conjunt de tots els jugadors
jocAPI.get('/players/ranking/loser')//GET : retorna el jugador amb pitjor percentatge d’èxit
jocAPI.get('/players/ranking/winner')//GET : retorna el jugador amb millor percentatge d’èxit 



module.exports = jocAPI