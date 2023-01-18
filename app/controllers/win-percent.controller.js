const { User, Game } = require('../db/db.connect');

async function getPercentage() {
  const users = await User.findAll();
  // map the results to create a new array just including id and username
  // this way allowing to add a percent of win for each player
  const list = users.map(({ id, username }) => {
    return { id, username };
  });

  // for of to be able to find the games of each player
  for (player of list) {
    const games = await Game.findAll({
      where: { playerID: player.id },
    });

    // filter when a player has won, and divide the lengths
    const amountWins = games.filter((game) => game.win === true);
    const percent = (amountWins.length / games.length) * 100;
    player.winPercent = games.length > 0 ? percent : 0;
  }
  return list;
}

module.exports = getPercentage;
