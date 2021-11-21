function rollDices() {
  const diceA = Math.floor(6*Math.random())+1;
  const diceB = Math.floor(6*Math.random())+1;
  const veredict = diceA + diceB === 7 ? 'win' : 'lose'
  return {
    diceA,
    diceB,
    rollScore: diceA + diceB,
    veredict
  }
}


module.exports = rollDices