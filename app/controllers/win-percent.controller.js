const { User, Game } = require('../db/db.connect');

async function getPercentage(...args) {
  const userList = await User.findAll({
    attributes: [...args],
  });
  for (user of userList) {
    const totalThrows = await Game.count({
      where: { PlayerID: user.id },
    });
    const totalWins = await Game.count({
      where: { playerID: user.id, win: true },
    });
    const percent = (totalWins / totalThrows) * 100;
    user.winPercent = +percent.toFixed(2);
  }
  return userList;
}

module.exports = getPercentage;
