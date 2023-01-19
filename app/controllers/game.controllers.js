const { User, Game } = require('../db/db.connect');

function ranNum(num) {
  return Math.floor(Math.random() * num) + 1;
}

async function userNewThrow(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      return res.status(404).json({ success: false, msg: 'cannot find user' });
    }

    const dice1 = ranNum(6);
    const dice2 = ranNum(6);

    const didWin = dice1 + dice2 === 7 ? true : false;

    const game = new Game({
      playerID: id,
      diceOne: dice1,
      diceTwo: dice2,
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
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(404).json({ success: false, msg: 'user not found' });
    }
    const userThrows = await Game.findAll({
      where: { playerID: id },
    });
    res.status(200).json({ nbHits: userThrows.length, userThrows });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function deleteThrows(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      return res.status(404).json({ success: false, msg: 'user not found' });
    }
    await Game.destroy({
      where: { playerID: id },
    });
    res
      .status(200)
      .json({
        success: true,
        msg: `${user.username}'s throws have been deleted`,
      });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

module.exports = {
  userNewThrow,
  getThrows,
  deleteThrows,
};
