// import { Game } from '../config/dbManager.js';
// import { checkError } from '../middlewares/errorHandler.js';

// const playGame = async (req, res, next) => {
//     const playerGames = Object.values(await Game.findAll({
//         where: {
//             playerId: req.params.id
//         }
//     }));

//     if(isNaN(Number(req.params.id))){
//         return checkError(400, next);
//     }else if(playerGames.length < 1){
//         return checkError(204, next);
//     }

//     let won = 0;
//     const dice1 = parseInt(6 * Math.random() + 1);
//     const dice2 = parseInt(6 * Math.random() + 1);
//     const gameResult = dice1 + dice2;

//     if(gameResult === 7) won = 1;

//     const newGame = await Game.create({ 
//         playerId: req.params.id,
//         dice1: dice1,
//         dice2: dice2,
//         won: won
//     });

//     res.json({
//         action: "Nueva tirada de dados",
//         playerId: newGame.playerId,
//         dice1: newGame.dice1,
//         dice2: newGame.dice2,
//         gameResult: gameResult,
//         won: won
//     });
//     next();
// }

// const getPlayerGames = async (req, res, next) => {
//     if(isNaN(Number(req.params.id))){
//         return checkError(400, next);
//     }

//     const playerGames = Object.values(await Game.findAll({
//             where: {
//                 playerId: req.params.id
//             }
//         }));

//     if(playerGames.length < 1) return checkError(204, next);
    

//     res.json(playerGames);
//     next();  
// }

// const deletePlayerGames = async (req, res, next) => {
//     if(isNaN(Number(req.params.id))) return checkError(400, next);
    
//     const deletedGames = await Game.destroy({
//         where: {
//             playerId: req.params.id
//         }
//     });

//     if(deletedGames === 0) return checkError(204, next);

//     res.json({
//         action: "All games deleted"
//     });
//     next();
// }

// export {
//     playGame,
//     getPlayerGames,
//     deletePlayerGames
// }