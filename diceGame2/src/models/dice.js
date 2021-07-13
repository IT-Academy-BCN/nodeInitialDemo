module.exports = {
    throwDice: () => {
        const diceOne = Math.floor(Math.random()*6) +1;
        const diceTwo = Math.floor(Math.random()*6) +1;
        return { diceOne, diceTwo };
    }
}