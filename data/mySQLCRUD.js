const { Player, Games }  = require ("./connectMySQL");

async function  addPlayer (player) {

     return await Player.create({name: player.name, registerDate: player.register_date});
 }

 async function  getAllPlayers () {

    return await Player.findAll();
}

async function getPlayer(id) {
    return await Player.findOne({where: {idPlayer: id}});
}
  

async function addGame(game) {
    return await Games.create({dice1: game.dice1, dice2: game.dice2, score: game.score, PlayerIdPlayer: game.idPlayer});

}

async function getAllGames(game) {
    return await Games.findAll({where: {PlayerIdPlayer: game.idPlayer}});

}

async function ranking() {
    return await Player.findAll({order: [['score', 'DESC']]});
    
} 
/*
async function modifyPlayer(id) {
    return await Player.update({name: player.name, registerDate: player.register_date});
}
*/

async function deletePlayerGames(game) {
    return await Games.destroy({where: {PlayeridPlayer: game.idPlayer}});
    

}
// loser
//winner

async function updateScore() {
    return await Player.update({score: Game.score});
}



module.exports = { addPlayer, getAllPlayers, getPlayer, addGame, getAllGames, ranking, deletePlayerGames, updateScore};


   