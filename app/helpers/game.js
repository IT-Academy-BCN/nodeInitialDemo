const rollTheDice = () => {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const diceResult = dice1 + dice2;
  const gameWon = (diceResult === 7);
  const result = { gameWon, dice1, dice2 };

  return (result);
};

module.exports = rollTheDice;
