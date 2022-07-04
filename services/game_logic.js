"use strict";
const Game = require("../models/game");
const Player = require("../models/player");

function dice_game(idGame) {
  let dice1 = Math.floor(6 * Math.random()) + 1;
  let dice2 = Math.floor(6 * Math.random()) + 1;
  let score = false;
  if (dice1 + dice2 === 7) {
    score = true;
   } else {
    score = false;
   }

  return new Game(dice1, dice2, score, idGame);
}

// vaig a crear una funció per actualitzar la puntuació updateScore i li passo els models player i game

async function updateScore(player, game) {
  player.totalGames = player.totalGames + 1;

  if ((game.score == true)) {
    player.totalWins = player.totalWins + 1;
  }
return player;

}
async function updateScore2(player) {
  player.totalGames = 0;
  player.totalWins = 0;
  player.winRatio = 0;
  
return player;

}

// vaig a crear una funció per actualitzar el percentatge de partides guanyades i li passo el model player

async function updateWinRatio(player) {
  let winRatio = (player.totalWins / player.totalGames) * 100;
  player.winRatio = winRatio; // lo pongo dentro del player
  return player;
}

// vaig a crear una funció per a fer la mitja del winRatio de tots els players 

async function averageWinRatio(players) {
let winRatioTotal = 0;
for (let index = 0; index < players.length; index++) {

   winRatioTotal = players[index].winRatio + winRatioTotal
     
  }
  let averageWinRatioResult = winRatioTotal / players.length;

  return averageWinRatioResult;

}


module.exports = { dice_game, updateScore, updateWinRatio, averageWinRatio, updateScore2 };
