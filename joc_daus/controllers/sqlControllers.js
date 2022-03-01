const uniqid = require('uniqid')
const { Player, Throws, User } = require('../database/mysqlPlug');
const Throw = require('../logicDices/rollDices');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { createToken } = require('../utilities/createToken')


const createPlayer = async (req, res) => {
  try {
    let { name } = req.body
    name? true : name = uniqid("ANONIM-")
    const playerStored = await Player.create({name});
    res.status(201).send({player: playerStored})
  } catch (e){
    res.status(500).send({message: "Player already exists - " + e.message})
  }
};

const updatePlayer = async (req, res) =>{
  const id = req.params.id
  const { name } = req.body
  try{
    await Player.update({name},{where:{id: id}})
    res.status(200).send({success: "player updated!"} )
  } catch (e){
    res.status(404).message({message: 'player not found'})
  }
};

const getPercentage = async(req, res) => {
  const players = await Player.findAll({ attributes:['id','name','percentage'] });
   res.status(200).send({ players })
};

const rollDices = async (req, res) => {

  const playerId = req.params.id

  const {
    diceA,
    diceB,
    total,
    win,
  } = Throw.roll()

  try {
      const roll = await Throws.create({
        diceA,
        diceB,
        total,
        win,
        playerId,
      })

      let arr = []

      if (win === true) {
        await Player.increment(['totalThrows','winThrows'],{where:{id:playerId}})
      }
      if (win === false ) {
        await Player.increment('totalThrows',{where:{id:playerId}})
      }  
      const player = await Player.findAll({attributes:['totalThrows','winThrows'],where:{id:playerId}})

      arr.push(player)

      const { totalThrows, winThrows } = arr[0][0].dataValues
      const percentage = (winThrows/totalThrows)*100
      await Player.update({percentage},{where:{id:playerId}})

      const playerRolled = await Player.findAll({attributes:['name'], where:{id:playerId}})
      res.status(200).send({playerRolled, roll})

  } catch (e) {
    res.status(500).send({message:e.message})
  }
};

const deleteThrows = async(req, res) => {
  const id = req.params.id
  try {
    await Throws.destroy({where:{playerId:id}})
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
};

const getThrows = async(req, res) => {
  const id = req.params.id
  try{
    const player = await Player.findAll(
      {
      attributes:['id','name'],
      where:{id:id},include:[Throws]
    })
    res.status(200).send(player)
  } catch (e) {
    res.status(404).send({message:'player throws NOT found'})
  }
};


const getPlayersPercentage = async(req, res) => {
  try {
    const totalPlayers = await Player.count()
    const sumWinRate = await Player.sum('percentage')
    const generalWinPercentage = sumWinRate/totalPlayers
    res.status(200).send({generalWinPercentage})
  } catch(e){
    res.status(500).send({message:e.message})
  }
};

const getBestPlayer = async(req, res) => {
  const bestWinRate = await Player.max('percentage')
  console.log(bestWinRate)
  try {
    const player = await Player.findAll({where:{percentage:bestWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
};

const getWorstPlayer = async(req, res) => {
  const worstWinRate = await Player.min('percentage')
  console.log(worstWinRate)
  try {
    const player = await Player.findAll({where:{percentage:worstWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
};

const register = async (req, res) => {
  [
    check('username', 'username is mandatory').not().isEmpty(),
    check('password', 'password is mandatory').not().isEmpty(),
    check('email', 'email most be valid').isEmail()
  ]
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body);
    res.json(user);

};

const login = async (req, res) => {

  const user = await User.findOne({ where: { email: req.body.email } });

  if (user) {
      const iguales = bcrypt.compareSync(req.body.password, user.password)
      if (iguales) {
          res.json({ access_granted:createToken(user) })
      } else {
          res.json({ error: "username o password incorrect"})
      }
  } else {
      res.json({ error: "username o password incorrect"})
  }
};


module.exports = {
  createPlayer,
  updatePlayer,
  getPercentage,
  rollDices,
  deleteThrows,
  getThrows,
  getPlayersPercentage,
  getBestPlayer,
  getWorstPlayer,
  register,
  login
}