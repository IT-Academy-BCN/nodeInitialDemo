const 
  Sequelize = require('sequelize'),
  {sequelize} = require('../MySQLPersistence/db'),
  {Player, Roll} = require('../MySQLPersistence/db'),
  uniqid = require('uniqid'),
  rollDices = require('../logicaDaus/daus')

const addNewPlayer = async(req, res) => {
  try {
    let { name } = req.body
    name? true : name = uniqid('ANONIM-')
    const playerStored = await Player.create({name})
    res.status(201).send({player: playerStored})
  } catch (e){
    res.status(500).send({message: e.message})
  }
}

const modifyPlayerName = async(req, res) =>{
  const id = req.params.id
  const { name } = req.body
  try{
    await Player.update({name},{where:{id: id}})
    const player = await Player.findAll({
      where:{
        id:id
      }
    })
    res.status(200).send({player})
  } catch (e){
    res.status(404).message({message: 'player not found'})
  }
}

const getAllPlayers = async(req, res) => {
  const players = await Player.findAll({ attributes:['id','name','winRate'],
    include:[Roll]
  })
   res.status(200).send({ players })
}

const playerRollDices = async(req, res) => {
  const PlayerId = req.params.id
  const {
    diceA,
    diceB,
    rollScore,
    veredict
  } = rollDices()
  let win
  try{
    const roll = await Roll.create({
      diceA,
      diceB,
      rollScore,
      veredict,
      PlayerId,
    })
    let arr = []
    if(veredict==='win')await Player.increment(['totalGames','totalWins'],{where:{id:PlayerId}})
    if(veredict==='lose')await Player.increment('totalGames',{where:{id:PlayerId}})
    const player = await Player.findAll({attributes:['totalGames','totalWins'],where:{id:PlayerId}})
    arr.push(player)
    const { totalGames, totalWins } = arr[0][0].dataValues
    const winRate = (totalWins/totalGames)*100
    await Player.update({winRate},{where:{id:PlayerId}})
    const playerRolled = await Player.findAll({attributes:['name'], where:{id:PlayerId}})
    res.status(200).send({playerRolled, roll})
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

const deleteGames = async(req, res) => {
  const id = req.params.id
  try {
    await Roll.destroy({where:{PlayerId:id}})
    await Player.update({
      totalGames:0,
      totalWins:0,
      winRate:0
    },{where:{id:id}})
    const player = await Player.findAll({where:{id:id}})
    res.status(200).send({player})
  } catch (e){
    res.status(500).send({message: e.message})
  }
}

const playerGamesList = async(req, res) => {
  const id = req.params.id
  try{
    const player = await Player.findAll(
      {
      attributes:['id','name'],
      where:{id:id},include:[Roll]
    })
    res.status(200).send(player)
  } catch (e) {
    res.status(404).send({message:'player not found'})
  }
}


const generalRanking = async(req, res) => {
  try {
    const totalPlayers = await Player.count()
    const sumWinRate = await Player.sum('winRate')
    const generalWinRate = sumWinRate/totalPlayers
    res.status(200).send({generalWinRate})
  } catch(e){
    res.status(500).send({message:e.message})
  }
}

const getBetterPlayer = async(req, res) => {
  const betterWinRate = await Player.max('winRate')
  try {
    const player = await Player.findAll({where:{winRate:betterWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

const getWorstPlayer = async(req, res) => {
  const worstWinRate = await Player.min('winRate')
  try {
    const player = await Player.findAll({where:{winRate:worstWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

module.exports = {
  addNewPlayer,
  modifyPlayerName,
  getAllPlayers,
  playerRollDices,
  deleteGames,
  playerGamesList,
  generalRanking,
  getBetterPlayer,
  getWorstPlayer
}