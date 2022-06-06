"use strict" //Per obtenir compatibilitat amb les ultimes versions, per emprar expresions de js més modern

/*Ens permetra el crear un objecte tipus schema de la bd i que posteriorment al guardar dades s'enmagatzamaran 
dins d'una coleccio concreta i alhora en un document. */

const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const config = require("../config/config");
const app = require("../app");


mongoose.connect("mongodb://localhost:27017/dice_game",(err, res) =>{
if(err){
throw err;
}else{
  console.log("La base de dades está funcionant correctament");
  app.listen(config.port, () => {
    console.log("Exemple d'app escoltant");
  })
}
});

let GameSchema = Schema({
    idGame: Number,
    dice1 : Number,
    dice2 : Number,
    score: Boolean,
    idPlayer: {type: Schema.ObjectId, ref: "Player"} //Referenciara un id d'objecte de la col.leccio Player
});

module.exports = mongoose.model("Game",GameSchema);

let PlayerSchema = Schema({
    name: String,
    idPlayer: Number,
    register_date: Date,
    
});

/* Exportem el model i genera un objecte anomenat Player, realitzant una instancia de totes les dades que 
nosaltres haguem enmagatzemat amb l'esquema definit */

module.exports = mongoose.model("Player", PlayerSchema); 