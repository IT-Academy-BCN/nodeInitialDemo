"use strict";

const Player = require("../models/player");
const PlayerDB = require("../data/crud");
let {
  dice_game,
  updateScore,
  updateWinRatio,
  averageWinRatio,
  updateScore2,
} = require("../services/game_logic");
const { json } = require("body-parser");

//TODO POST /players: crea un jugador// addNewPlayer

const addNewPlayer = async (req, res) => {
  try {
    // si te nom, que el guardi en la base de dades
    if (req.body.name && req.body.name.trim() !== "") {
      let player0 = new Player();
      player0.name = req.body.name;
      await PlayerDB.addNewPlayerData(player0);
      //envia resposta
      res.status(200).json({
        message: `${player0.name} created successfully!! Congratulations!!!`,
      });
    } else {
      // si no te nom, que el jugador que creï sigui ANONYMOUS
      req.body.name = "ANONYMOUS";
      let player1 = new Player();
      player1.name = req.body.name;
      await PlayerDB.addNewPlayerData(player1); //
      //envia resposta
      res.status(200).json({
        message: `${player1.name} created successfully!! Congratulations!!!`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//TODO: // GET /players: retorna el llistaupdateWinRatio de tots els jugadors del sistema amb el seu percentatge mig d’èxits / getAllPlayers

const getAllPlayers = async (req, res) => {
  try {
    let players = await PlayerDB.getAllPlayersData();
    res.status(200).json({ message: { players } });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// TODO POST /games/{id}: un jugador específic realitza una tirada / addPlayerGame

const addPlayerGame = async (req, res) => {
  try {
    // comprovo si hi ha id...
    if (!req.params.id) {
      res.status(400).json({ message: "Bad request" });
    } else {
      let playerdb = await PlayerDB.getPlayerData(req.params.id);
      if (playerdb) {
        // si hi ha jugador
        let game = dice_game(req.params.id);
        // Realitzar la tirada
        await PlayerDB.addGameData(game);
        //TODO: actualitzar ratios del jugador
        let player = new Player();
        player.id = req.params.id;
        player.name = playerdb.name;
        player.register_date = playerdb.register_date;
        player.totalGames = playerdb.totalGames;
        player.totalWins = playerdb.totalWins;
        player.winRatio = playerdb.winRatio;

        /* este player que igualo en la linea siguiente de abajo con await updateWinRatio(player) y await updateScore(player);es el player que return en la 
funcion updateWinRatio y updateScore de ./services/game_logic.js */

        player = await updateScore(player, game);
        player = await updateWinRatio(player);

        // guardar a la base de dades la tirada que ha realitzat, actualizant les dades dels totals i winRatio i demes
        // de fet he actualitzat l'objecte player sencer
        let updateresult = await PlayerDB.updatePlayerData(player);
        if (game.score == true) {
          res.status(200).json({
            message: `Game created successfully!! Congratulations!! You've won!!`,
          });
        } else {
          res.status(200).json({
            message: `Game created successfully!! Sorry, You've lost`,
          });
        }
      } else {
        // si el jugador no existeix
        res.status(404).json({ message: "Player not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// TODO  GET /games/{id}: retorna el llistat de jugades per un jugador / getAllGames

const getAllGames = async (req, res) => {
  try {
    // si no hi ha id...
    if (!req.params.id) {
      res.status(400).json({ message: "Bad request" });
    } else {
      // si hi ha id...
      let playerdb = await PlayerDB.getPlayerData(req.params.id);

      // Creamos modelo player e igualamos el modelo playerdb con player.
      let player = new Player();
      player.id = req.params.id;
      player.name = playerdb.name;
      player.register_date = playerdb.register_date;
      player.totalGames = playerdb.totalGames;
      player.totalWins = playerdb.totalWins;
      player.winRatio = playerdb.winRatio;

      if (player) {
        // si hi ha jugador
        let games = await PlayerDB.getAllGamesData(player); //Retornar el llistat de tirades
        res.status(200).json({ message: { games } });
      } else {
        // si el jugador no existeix
        res.status(404).json({ message: "Player not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//TODO  DELETE /games/{id}: elimina les tirades del jugador /deletePlayerGames

const deletePlayerGames = async (req, res) => {
  try {
    // si no hi ha id...
    if (!req.params.id) {
      res.status(400).json({ message: "Bad request" });
    } else {
      // si hi ha id...
      let playerdb = await PlayerDB.getPlayerData(req.params.id);

      if (playerdb) {
        //si hi ha jugador

        //esborra tirades del jugador
        await PlayerDB.deletePlayerGamesData(playerdb);

        // actualitza ratios del jugador
        let player = new Player();
        player.id = req.params.id;
        player.name = playerdb.name;
        player.register_date = playerdb.register_date;
        player.totalGames = playerdb.totalGames;
        player.totalWins = playerdb.totalWins;
        player.winRatio = playerdb.winRatio;

        player = await updateScore2(player);

        /* guardar a la base de dades actualizant les dades dels totals i winRatio i demes
         de fet he actualitzat l'objecte player sencer */
        await PlayerDB.updatePlayerData(player);

        res.status(200).json({
          message: `Player ${player.name} rolls deleted successfully !! Congratulations!!!`, // tirades eliminades
        });
      } else {
        // si el jugador no existeix
        res.status(404).json({ message: "Player not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// TODO  GET /ranking: retorna un ranking de jugadors ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors / ranking

const ranking = async (req, res) => {
  try {
    
    // TODO : si no hi ha res pre mostrar, mostrar array buit i no internal server error

    let players = await PlayerDB.getAllPlayersRanking();
   let average = await averageWinRatio(players);
    res.status(200).json({ message: {players}, average});
      } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// i el percentatge mig és: ${average}


//TODO  PUT players/{id}: modifica el nom del jugador / modifyNamePlayer

const modifyNamePlayerController = async (req, res) => {
  const idPlayer = req.params.id;
  const namePlayer = req.body.name;
  try {
    const player = new Player(namePlayer);
    player.id = idPlayer;
    await PlayerDB.modifyNamePlayerData(player);
    res.status(200).json({
      message: `Player ${player.name} modified successfully!! Congratulations!!!`,
    });
  } catch (error) {
    res.status(404).json({ message: "Player not found" });
  }
};

// TODO // GET /ranking/loser: retorna el jugador amb pitjor percentatge d’èxit / loserPlayer

const loserPlayer = async (req, res) => {
  try {
    let players = await PlayerDB.getLoserPlayersRanking();
    res.status(200).json({ message: { players } });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// TODO // GET /ranking/winner: retorna el jugador amb millor percentatge d’èxit / winnerPlayer

const winnerPlayer = async (req, res) => {
  try {
    let players = await PlayerDB.getWinnerPlayersRanking();
    res.status(200).json({ message: { players } });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addNewPlayer,
  getAllPlayers,
  addPlayerGame,
  getAllGames,
  deletePlayerGames,
  modifyNamePlayerController,
  ranking,
  loserPlayer,
  winnerPlayer,
};
