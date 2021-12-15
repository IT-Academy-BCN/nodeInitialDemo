/* eslint-disable max-len */
const User = require('../schemas/user-schema-mongo');
const rollTheDice = require('../helpers/game');

// Crea un jugador
const createUser = async (req, res, next) => {
  const { name } = req.body;
  try {
    const previousUser = await User.find({ name });

    if (!(previousUser.length === 0) && !(name === undefined)) { res.status(409).send({ error: 'Duplicated Username' }); } else {
      const newPlayer = new User({
        name,
      });

      await newPlayer.save();
      res.send(newPlayer);
    }
  } catch (err) { next(err); }
};

// Modifica el nombre del jugador
const modifyPlayerName = async (req, res, next) => {
  const { playerId } = req.params;
  const { newName } = req.body;
  try {
    const previousUser = await User.find({ newName });
    if (previousUser) { res.status(409).send({ error: 'Duplicated Username' }); return; }

    const updatedPlayer = await User.findByIdAndUpdate(playerId, { name: newName }, { new: true });
    if (!updatedPlayer) {
      throw new Error('User not found');
    }
    res.send(updatedPlayer);
  } catch (err) { next(err); }
};

// Elimina las tiradas del jugador
const cleanGameLog = async (req, res, next) => {
  const { playerId } = req.params;
  try {
    const foundUser = await User.findById(playerId);
    if (!foundUser) {
      throw new Error('User not found');
    }
    foundUser.gameLog = [];
    foundUser.successRate = null;
    await foundUser.save();
    res.send('Game Log erased');
  } catch (err) { next(err); }
};

// Un jugador específico realiza un tirón

const makeAPlay = async (req, res, next) => {
  const { playerId } = req.params;

  const result = rollTheDice();
  try {
    const foundPlayer = await User.findById(playerId);
    if (!foundPlayer) {
      throw new Error('User not found');
    }
    foundPlayer.gameLog.push(result);
    foundPlayer.successRate = foundPlayer.successRateCalc();
    await foundPlayer.save();
    res.send({ result });
  } catch (err) { next(err); }
};

// Devuelve el listado de jugadas por un jugador.
const playersList = async (req, res, next) => {
  const { playerId } = req.params;
  try {
    const foundPlayer = await User.findById(playerId);
    if (!foundPlayer) {
      throw new Error('User not found');
    }
    res.send(foundPlayer.gameLog);
  } catch (err) { next(err); }
};

// Devuelve el porcentaje de exito de un jugardor especifico
const individualPlayerSuccessRate = async (req, res, next) => {
  const { playerId } = req.params;
  try {
    const foundPlayer = await User.findById(playerId);
    if (!foundPlayer) {
      throw new Error('User not found');
    }
    res.json(foundPlayer.successRate);
  } catch (err) { next(err); }
};

// Devuelve el listado de todos los jugadores del sistema con su porcentaje medio de logros
const playersAndSuccessRateList = async (req, res, next) => {
  try {
    const allPlayers = await User.find({}, 'name successRate');
    res.json(allPlayers);
  } catch (err) { next(err); }
};

// GET /players/ranking/winner: devuelve al jugador con mejor porcentaje de éxito
const winner = async (req, res, next) => {
  try {
    const winnerPlayer = await User.findOne({}).sort('-successRate');
    res.json(winnerPlayer);
  } catch (err) { next(err); }
};

// GET /players/ranking/loser: devuelve al jugador con peor porcentaje de éxito
const looser = async (req, res, next) => {
  try {
    const winnerPlayer = await User.findOne({ successRate: { $ne: null } }).sort('successRate');
    res.json(winnerPlayer);
  } catch (err) { next(err); }
};

// GET /players/ranking: devuelve el porcentaje medio de logros del conjunto de todos los jugadores
const successRateAvg = async (req, res, next) => {
  try {
    const globalAvgSuccessRate = await User.aggregate(
      [{
        $match: {
          successRate: {
            $ne: null,
          },
        },
      },
      {
        $group:
             {
               _id: '_id',
               successRateAvg: { $avg: '$successRate' },
             },
      },
      ],
    );
    res.json(globalAvgSuccessRate[0].successRateAvg);
  } catch (err) { next(err); }
};

module.exports = {
  createUser, modifyPlayerName, cleanGameLog, makeAPlay, playersList, individualPlayerSuccessRate, playersAndSuccessRateList, winner, looser, successRateAvg,
};
