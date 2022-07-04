
const { Player, Games }  = require ("./connectMySQL");
const { Op } = require("sequelize");




async function  addNewPlayerData(player) {  // bbdd: constructor

     return await Player.create({name: player.name, register_date: player.register_date, totalGames: player.totalGames, totalWins: player.totalWins, winRatio: player.winRatio});
 }


 async function  getAllPlayersData() {
     
     return await Player.findAll();
    }

async function getPlayerData(id) {
        return await Player.findOne({where: {idPlayer: id}});
    }
    
async function addGameData(game) {
        return await Games.create({dice1: game.dice1, dice2: game.dice2, score: game.score, PlayerIdPlayer: game.idPlayer});
    
    }

async function getAllGamesData(player) {

        //PlayerIdPlayer es la columna de base de datos de la tabla games dnd se almacenan las id de los player (ForeignKey)
        return await Games.findAll({where: {PlayerIdPlayer: player.id}});
    
    }
    
    async function deletePlayerGamesData(game) {
    
        return await Games.destroy({where: {PlayeridPlayer: game.idPlayer}});
        
    }

async function  getAllPlayersRanking() {
    
    return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}});
}

async function modifyNamePlayerData(player) {

    return await Player.update({name: player.name}, {where: {idPlayer: player.id}});

}
async function updatePlayerData(player) {

// de fet he actualitzat l'objecte player sencer

    return await Player.update({name: player.name, register_date: player.register_date, totalGames: player.totalGames, totalWins: player.totalWins, winRatio: player.winRatio }, {where: {idPlayer: player.id}});

}


async function  getLoserPlayersRanking() {

    return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}, order: [['winRatio', 'ASC']], limit: 1});
}

async function  getWinnerPlayersRanking () {

    return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}, order: [['winRatio', 'DESC']], limit: 1});
}





module.exports = { 
    addNewPlayerData, 
    getAllPlayersData, 
    getPlayerData, 
    addGameData,   
    getAllGamesData, 
    deletePlayerGamesData, 
    getAllPlayersRanking, 
    modifyNamePlayerData, 
    updatePlayerData,
    getLoserPlayersRanking, 
    getWinnerPlayersRanking,
};

