const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const uniqid  = require('uniqid');
const playerSchema = require('./schemas/player');
const throwsSchema = require('./schemas/throws');


const diceModel = require('./dice');
const PlayerModel = mongoose.model('Player', playerSchema);
const ThrowModel = mongoose.model('Throws', throwsSchema);


module.exports = {

    create: async playerName => {
        const nombre = playerName;
        const player = new PlayerModel({name: nombre, registeredDate: new Date()});
        await player.save(); // hablar con la base de datos para crear al jugador. 
    },
    createAnonim: async () => {
        const id = uniqid();
        const nombre = `ANONIM-${id}`;
        const player = new PlayerModel({name: nombre, registeredDate: new Date()});
        await player.save(); // hablar con la base de datos para crear al jugador. 
    },
    throwDice: async playerId => {
        const player = await PlayerModel.findOne({id: playerId}).exec();
        if (player) {
            //hacer tirada de dados
            const throwValues = diceModel.throwDice();
            const newThrow = new ThrowModel({
                name: player.name,
                diceOne: throwValues.diceOne,
                diceTwo: throwValues.diceTwo,
                player: player._id
            })
            await newThrow.save();
            return (throwValues);
        } else {
            throw 'playerDoesNotExist';
        }
    },
    playerList: async playerThrows => {
        const player = await ThrowModel.find({player: playerThrows}).exec();
        if (player.length > 0){
            return player;
        } else {
            throw new Error('Please select a valid user who played at least one game')
        }
    },
    ranking: async () => {
        const allThrows = await ThrowModel.find({}).exec();
        const allWins = allThrows.reduce((total, diceValues) => {
            if (diceValues.diceOne + diceValues.diceTwo === 7) {
                return total + 1;
            } else {
                return total;
            }
        }, 0);
        console.log('exito: ', allWins *100 / allThrows.length, '%');
        return allWins *100 / allThrows.length;
    },
    playersList: async () => {
        const list = await ThrowModel.aggregate([
            {
              '$group': {
                '_id': '$player', 
                'throws': {
                  '$push': {
                    'diceOne': '$diceOne', 
                    'diceTwo': '$diceTwo'
                  }
                }
              }
            }
          ]).exec();
        let totalWins = 0;
        list.forEach(playerThrows => {
            console.log('player: ', playerThrows._id);
            totalWins = playerThrows.throws.reduce((total, diceValues) => { //throws parte de aggregate 
                if (diceValues.diceOne + diceValues.diceTwo === 7) {
                    return total + 1;
                } else {
                    return total;
                }
            }, 0);
            console.log('wins: ', totalWins *100 / playerThrows.throws.length, '%');
            totalWins = totalWins *100 /playerThrows.throws.length;
            return  totalWins = 'the player: ' + playerThrows._id + ' won ' + totalWins + '%';
        });
     return totalWins;
    },
    winnerRanking: async () => {
        const list = await ThrowModel.aggregate([
            {
              '$group': {
                '_id': '$player', 
                'throws': {
                  '$push': {
                    'diceOne': '$diceOne', 
                    'diceTwo': '$diceTwo'
                  }
                }
              }
            }
          ]).exec();
        let winner = list.map(playerThrows => {
            console.log('player: ', playerThrows._id);
            wonPlays = playerThrows.throws.reduce((total, diceValues) => { //throws parte de aggregate 
                if (diceValues.diceOne + diceValues.diceTwo === 7) {
                    return total + 1;
                } else {
                    return total;
                }
            }, 0)
            console.log({playerId: playerThrows._id, winRate: wonPlays * 100 /playerThrows.throws.length});
            return {playerId: playerThrows._id, winRate: wonPlays * 100 /playerThrows.throws.length};
        });
        const winnerPlayer = winner.reduce((max, curPlayer) =>{ 
            return max.winRate > curPlayer.winRate ?  max : curPlayer
        });
        return winnerPlayer;
    },
    worstRanking: async () => {
        const list = await ThrowModel.aggregate([
            {
              '$group': {
                '_id': '$player', 
                'throws': {
                  '$push': {
                    'diceOne': '$diceOne', 
                    'diceTwo': '$diceTwo'
                  }
                }
              }
            }
          ]).exec();
        let looser = list.map(playerThrows => {
            console.log('player: ', playerThrows._id);
            wonPlays = playerThrows.throws.reduce((total, diceValues) => { //throws parte de aggregate 
                if (diceValues.diceOne + diceValues.diceTwo === 7) {
                    return total + 1;
                } else {
                    return total;
                }
            }, 0)
            console.log({playerId: playerThrows._id, rate: wonPlays * 100 /playerThrows.throws.length});
            return {playerId: playerThrows._id, rate: wonPlays * 100 /playerThrows.throws.length};
        });
        const looserPlayer = looser.reduce((min, curPlayer) =>{ 
            return min.rate < curPlayer.rate ?  min : curPlayer;
        });
        return looserPlayer;
    },
    modifyName: async (oldName, newName) => {
        try{
            console.log(oldName, newName);
        const player = await PlayerModel.findOneAndUpdate({name: oldName}, { $set: {name:newName}}, { new: true }).exec();
        console.log('AAA', player);
        }catch(error){
            return error;
        }
    },
    deleteGames: async (playerId) => {
        try{
            const deletedGames = await ThrowModel.deleteMany({player: playerId}).exec();
            return deletedGames.deletedCount;
        }catch(error){
            return error;
        }
    }
};
