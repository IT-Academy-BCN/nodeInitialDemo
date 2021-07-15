
const model = require('../models/player');

module.exports = {
    create: async (req, res) => {
        const { nombre } = req.body;
        if(nombre === 'ANONIM'){
            try{
            let player = await model.createAnonim();
            res.status(200).json({resultado: player});
            }catch(erro){
                console.log(error);
            res.status(500).json({error: 'No se ha creado el jugador'});
            }
        }else{
        try {
            await model.create(nombre);
            res.status(200).json({resultado: 'ok'});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'No se ha creado el jugador'});
        }
      }
    },
    throwDice: async (req, res) => {
        const playerdId = req.params.id;
        try {
            const values = await model.throwDice(playerdId);
            res.status(200).json(values);
        } catch (error) {
            if(error === 'playerDoesNotExist') {
                res.status(400).json({error: 'Player does not exist'})
                return;
            }
            console.log(error);
            res.status(500).json({error: 'No game played'})
        }
    },  
    playerList: async (req, res) => {
       const playerId = req.params.id;
    try{
       const list = await model.playerList(playerId);
       res.status(200).json({list});
    }catch (error) {
        console.log(error);
        if(!list) {
            res.status(400).json({error: 'list not found'})
            return;
        }
        res.status(500).json({error: 'There is no list'});
    }
   },
   ranking: async (req, res) => {
    try {
        const result = await model.ranking();
        res.json({
            success: true,
            message:`Average winning rate: ${result}%`
        });
    } catch (error) {
        res.status(400)
            .send({
            success: false,
            error: 'Nobody played the game :('
        });
    }
},
    playersList: async (req, res) => {
    try{
        const list = await model.playersList();
        res.status(200).json({list});
    }catch(error) {
        console.log(error);
        if(!list) {
            res.status(400).json({error: 'list not found'})
            return;
        }
        res.status(500).json({error: 'There is no list'});
    }
   },
   winnerRanking: async (req, res) => {
    try {
        let winner = await model.winnerRanking();
        res.json({
            success: true,
            winner: winner
        });
    } catch (error) {
        res.status(400)
            .send({
            success: false,
            error: error
        });
    }
},
    worstRanking: async (req, res) => {
    try {
        let looser = await model.worstRanking();
        res.json({
            success: true,
            looser: looser
        });
    } catch (error) {
        res.status(400)
            .send({
            success: false,
            error: error
        });
    }
  }, 
  modifyName: async (req, res) => {    
    try{
        let oldName = req.body.oldName;
        let newName = req.body.newName; //objeto completo con los datos actualizados
        const updatedName = await model.modifyName(oldName, newName);
        res.status(200).json(updatedName);
     }catch (error) {
        res.status(500).json({error: 'Does not exist such player'});
     }
    },
    deleteGames: async (req, res) => {
        try{
            let player = req.params.id;
            let deletedCount = await model.deleteGames(player);
            if(deletedCount > 0){
                res.json({
                    success: true,
                    message: 'Games deleted successfully',
                    deletedCount
                })
            }
        }catch(error){
            res.status(400).send({
                success: false,
                error: error})

        }
    }
};