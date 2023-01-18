const { Game } = require('../db/db.connect');

async function playerNewThrow(req, res) {
  try {
    const { id } = req.params;
    const user = await Game.findOne({
      where: { PlayerID: id },
    });
    if (!user) {
      return res.status(404).json({ success: false, msg: 'user not found' });
    }

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    const didWin = dice1 + dice2 === 7 ? true : false;

    const game = new Game({
      diceOne: dice1,
      diceTwo: dice2,
      playerID: id,
      win: didWin,
    });
    await game.save();
    res.status(201).json({ success: true, msg: 'attempt saved', win: didWin });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function getThrows(req, res) {
  try {
    const { id } = req.params;
    const user = await Game.findOne({
      where: { PlayerID: id },
    });
    if (!user) {
      return res.status(404).json({ success: false, msg: 'user not found' });
    }
    const throws = await Game.findAll({
      where: { PlayerID: id },
    });

    res.status(200).json({ throws });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function deleteThrows(req, res) {
  try {
    const { id } = req.params;
    const user = await Game.findOne({
      where: { PlayerID: id },
    });
    if (!user) {
      return res.status(404).json({ success: false, msg: 'user not found' });
    }

    await Game.destroy({
      where: { playerID: id },
    });
    res.status(200).json({ success: true, msg: 'throws deleted' });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

module.exports = {
  playerNewThrow,
  getThrows,
  deleteThrows,
};
