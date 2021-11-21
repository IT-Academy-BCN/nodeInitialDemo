const 
mongoose = require('mongoose'),
Schema = mongoose.Schema

function connectMongoDB(){
  mongoose.connect('mongodb://localhost:27017/diceGame')
}
mongoose.connection.on('open', ()=>console.log('mongoDB connected'))

const PlayerSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  data: String,
  totalGames: {
    type: Number,
    default: 0 
  },
  totalWins : {
    type : Number,
    default: 0
  },
  winRate : {
    type: Number,
    default: 0
  },
  rolls : [Object]
})

const Player = mongoose.model('players', PlayerSchema)

module.exports = {
  connectMongoDB,
  Player
}