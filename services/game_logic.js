"use strict";
const Game = require("../models/Game");
const Player = require("../models/Player");


function dice_game(idPlayer, idGame) {
  let dice1 = Math.floor(6 * Math.random()) + 1;
  let dice2 = Math.floor(6 * Math.random()) + 1;
  let score
  if ( dice1 + dice2 === 7) {
score = true
    console.log(`Congratulations!! You've won!! `);
  } else {
   score = false
    console.log(`Sorry, you lost!! `);
  }

  return new Game(dice1, dice2, score, idPlayer, idGame);
}

function winRatio() {

  let winn = (totalWins / totalGames)*100;

   return new Player(idPlayer, namePlayer, register_date, winn);
}

function lossRatio() {

  let loss = (totalGames-totalWins / totalGames)*100;

  return new Player(idPlayer, namePlayer, register_date, loss);
}


 
module.exports = {dice_game, winRatio, lossRatio};