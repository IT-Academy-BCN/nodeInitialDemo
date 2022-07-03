const { Player, Game }  = require ("./connectmongodb");
const mongoose = require('mongoose');

async function  addNewPlayerData(player) {  // bbdd: constructor
    const newPlayer = new Player();
    newPlayer.name = player.name;
    newPlayer.register_date = player.register_date;
    newPlayer.totalGames = player.totalGames;
    newPlayer.totalWins = player.totalWins;
    newPlayer.winRatio = player.winRatio;
    return await Player.create(newPlayer);
 }


async function  getAllPlayersData() {
    return await Player.find();
}

async function getPlayerData(id) {
    try {
        return await Player.findOne({_id: mongoose.Types.ObjectId(id)});  
    }catch(error) {
        return null;
    }
    }
    
async function addGameData(game) {
    const newGame = new Game();
    newGame.PlayerIdPlayer = game.idPlayer;
    newGame.date = game.date;
    newGame.result = game.result;
    return await Game.create(newGame);
}

async function getAllGamesData(player) {
    try {
        return await Player.findOne({_id: mongoose.Types.ObjectId(player.id)});  
    }catch(error) {
        return null;
    }
}
    
async function deletePlayerGamesData(game) {
    try {
    return await Game.findOneAndDelete({_id: mongoose.Types.ObjectId(game.id)});  
}catch(error) {
    return null;
}
}
async function  getAllPlayersRanking() {


    return await Player.find({ totalGames: { $gte: 0 } }).exec();
   
}

async function modifyNamePlayerData(player) {
    return await Player.updateOne({_id: player.id}, { name: player.name });
}
async function updatePlayerData(player) {
// de fet he actualitzat l'objecte player sencers
    return await Player.findOneAndUpdate({_id: mongoose.Types.ObjectId(player.id)}, {name: player.name, register_date: player.register_date, totalGames: player.totalGames, totalWins: player.totalWins, winRatio: player.winRatio });

}


async function  getLoserPlayersRanking() {

    
    //return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}, order: [['winRatio', 'ASC']], limit: 1});
}

async function  getWinnerPlayersRanking () {

   
    // return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}, order: [['winRatio', 'DESC']], limit: 1});
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

