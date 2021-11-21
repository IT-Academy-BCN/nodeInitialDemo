function rollDices() {
  const rollDiceA = Math.floor(6*Math.random())+1;
  const rollDiceB = Math.floor(6*Math.random())+1;
  return rollDiceA+rollDiceB
}



module.exports = rollDices