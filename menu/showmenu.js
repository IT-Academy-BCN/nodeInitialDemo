const showMenu = (question) => {
    return new Promise ((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(question, (answer) => {
            readline.close();
            resolve(answer);
        });
    });
}

module.exports = showMenu;