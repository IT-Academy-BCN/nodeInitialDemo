const main = () => {
    return new Promise ((resolve, reject) => {
        console.clear();
        console.log("----- TO-DO App -----");
        console.log('1. Add Task');
        console.log('2. Update Task');
        console.log('3. Delete Task');
        console.log('4. List Task');
        console.log('5. List All');
        console.log('6. Show Task State');
        console.log('0. Exit \n');

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Select option: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

module.exports = main;