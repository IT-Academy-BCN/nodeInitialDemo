"use strict" //Per obtenir compatibilitat amb les ultimes versions, per emprar expresions de js més modern

/*Ens permetra el crear un objecte tipus schema de la bd i que posteriorment al guardar dades s'enmagatzamaran 
dins d'una coleccio concreta i alhora en un document. */

const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const config = require("../config/config");
const app = require("../app");
const { Decimal128 } = require("bson");


mongoose.connect("mongodb://localhost:27017/dice_game",(err, res) =>{
  if(err){
    throw err;
  }else{
//   console.log("Synchronized tables");
//   app.listen(config.port, () => {
//     console.log("app listening on port " + config.port);
//   })
  }
});

let GameSchema = Schema({
    idGame: Number,
    dice1 : Number,
    dice2 : Number,
    score: Boolean,
    idPlayer: {type: Schema.ObjectId, ref: "Player"} //Referenciara un id d'objecte de la col.leccio Player
});

const Game = mongoose.model("Game", GameSchema);

let PlayerSchema = Schema({
    name: String,
    idPlayer: Number,
    register_date: Date,
    totalGames: Number,
    totalWins: Number,
    winRatio: Number
    
});

/* Exportem el model i genera un objecte anomenat Player, realitzant una instancia de totes les dades que 
nosaltres haguem enmagatzemat amb l'esquema definit */

const Player = mongoose.model("Player", PlayerSchema);

module.exports = { Game, Player };