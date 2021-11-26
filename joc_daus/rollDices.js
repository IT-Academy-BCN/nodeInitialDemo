
class Throw {

    constructor(diceA, diceB, total, win) {
        this.diceA = diceA;
        this.diceB = diceB;
        this.total = total;
        this.win = win

    };

    static roll() {

        var diceA = Math.floor( (Math.random() * 6) + 1 );
        var diceB = Math.floor( (Math.random() * 6) + 1 );
        var total = diceA + diceB;
        var win = win;

        if (total === 7) {
            win = true;
        } else {
            win = false;
        };

        return new Throw(diceA, diceB, total, win);
       
    };
};    

module.exports = Throw



