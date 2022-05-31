const Player = require("../models/Player");
const PlayerDB = require("../data/crud");
let { dice_game, winRatio, lossRatio } = require("../services/game_logic");

// TODO  POST /players: crea un jugador

const addNewPlayer = async (req, res) => {
    try {
       
        if (!req.body.name) {
            res.status(400).json({ message: "Bad request" });
          } else {
            let player0 = new Player();
            player0.name = req.body.name;
            await PlayerDB.addPlayer(player0);
            //envia resposta
            res.status(200).json({message: ${player0.name} created successfully!! Congratulations!!! },);
            // a la resta de casos que es posi nom
           } else {
                  let player1 = new Player();
                  player1.name = req.body.name;
                  await PlayerDB.addNewPlayer(player1);
      
          } } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
          }
        };
        


/*
      if (!req.body.name || req.body.name == " ") {
          req.body.name = "Anonymous";
        let player0 = new Player();
        player0.name = req.body.name;
        await PlayerDB.addNewPlayer(player0);
        //envia resposta
        res.status(200).json({
          message: `${player0.name} created successfully!! Congratulations!!!`, // Jugador creat*/
       



  const getAllPlayers = async (req, res) => {
    try {
      let players = await PlayerDB.getAllPlayers();
      res.status(200).json({players});
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

module.exports = { addNewPlayer, getAllPlayers};
