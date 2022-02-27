
const Sequelize = require('sequelize');
const { Player, Throws }  = require('../modelSQL/playerSQL');
const uniqid = require('uniqid');
const Throw = require('../rollDices');

const createPlayer = async(req, res) => {
  try {
    let { name } = req.body
    name? true : name = uniqid('ANONIM-')
    const playerStored = await Player.create({name})
    res.status(201).send({player: playerStored})
  } catch (e){
    res.status(500).send({message: e.message})
  }
}

const updatePlayer = async(req, res) =>{
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

const getPercentage = async(req, res) => {
  const players = await Player.findAll({ attributes:['userID','name','percentage'],
    include:[Throws]
  })
   res.status(200).send({ players })
}

const rollDices = async(req, res) => {
  const PlayerId = req.params.id
  const {
    diceA,
    diceB,
    total,
    win
  } = Throw.roll()
  let winner
  try{
    const roll = Throw.roll({
      diceA,
      diceB,
      total,
      win,
      PlayerId,
    })
    let arr = []
    if(winner === true)await Player.increment(['totalThrows','winThrows'],{where:{id:PlayerId}})
    if(winner === false)await Player.increment('totalThrows',{where:{id:PlayerId}})
    const player = await Player.findAll({attributes:['totalThrows','winThrows'],where:{id:PlayerId}})
    arr.push(player)
    const { totalThrows, winThrows } = arr[0][0].dataValues
    const percentage = (winThrows/totalThrows)*100
    await Player.update({perccentage},{where:{UserID:PlayerId}})
    const playerRolled = await Player.findAll({attributes:['name'], where:{userID:PlayerId}})
    res.status(200).send({playerRolled, roll})
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

const deleteThrows = async(req, res) => {
  const id = req.params.id
  try {
    await Throw.destroy({where:{userID:id}})
    await Player.update({
      totalThrows:0,
      winThrows:0,
      percentage:0
    },{where:{id:id}})
    const player = await Player.findAll({where:{id:id}})
    res.status(200).send({player})
  } catch (e){
    res.status(500).send({message: e.message})
  }
}

const getThrows = async(req, res) => {
  const id = req.params.id
  try{
    const player = await Player.findAll(
      {
      attributes:['userID','name'],
      where:{userID:id},include:[Throw]
    })
    res.status(200).send(player)
  } catch (e) {
    res.status(404).send({message:'player not found'})
  }
}


const getPlayersPercentage = async(req, res) => {
  try {
    const totalPlayers = await Player.count()
    const sumWinRate = await Player.sum('percentage')
    const generalWinRate = sumWinRate/totalPlayers
    res.status(200).send({generalWinRate})
  } catch(e){
    res.status(500).send({message:e.message})
  }
}

const getBestPlayer = async(req, res) => {
  const betterWinRate = await Player.max('percentage')
  console.log(betterWinRate)
  try {
    const player = await Player.findAll({where:{percentage:betterWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

const getWorstPlayer = async(req, res) => {
  const worstWinRate = await Player.min('percentage')
  console.log(worstWinRate)
  try {
    const player = await Player.findAll({where:{percentage:worstWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

module.exports = {
  createPlayer,
  updatePlayer,
  getPercentage,
  rollDices,
  deleteThrows,
  getThrows,
  getPlayersPercentage,
  getBestPlayer,
  getWorstPlayer
}