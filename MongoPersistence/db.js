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
  win: Number,
  lose: Number

})

const Player = mongoose.model('players', PlayerSchema)

module.exports = {
  connectMongoDB,
  Player
}