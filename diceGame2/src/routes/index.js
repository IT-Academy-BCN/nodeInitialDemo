const express = require('express');
const router = express.Router(); //cargamos objeto servicio de la ruta que tiene muchos metodos

const playerController = require('../controllers/player');

// register a player
router.post('/players', playerController.create); // lo que tenemos en la funcion del archivo

// player makes a throw
router.post('/players/:id/games/', playerController.throwDice); 

// list of all the plays per player
router.get('/players/:id/games', playerController.playerList);

// list of all the plays of all the players and average of success
router.get('/players/', playerController.playersList);

// average ranking of all the success
router.get('/players/ranking', playerController.ranking);

// player with the best average
router.get('/players/ranking/winner', playerController.winnerRanking);

// player with the worst average
router.get('/players/ranking/looser', playerController.worstRanking);

// player modifies the name
router.put('/players', playerController.modifyName);

// delete games
router.delete('/players/:id/games', playerController.deleteGames);

module.exports = router;