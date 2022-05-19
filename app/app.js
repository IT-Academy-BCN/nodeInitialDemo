/* const functions {addTask, 
                  listTask,
                  listAll
                  updateTask,
                  deleteTask,
                  showTaskState 
                } = require('./functions') */

/* addTask()
- listTask()
- listAll()
- updateTask()
- deleteTask()
- showTaskState() returns {(pending/ executing/ completed), init date, completation date, userId}

  */
const addTask = (userame, description) => {
    console.log(`Task ${description} created for ${userName}.`);
}

const showMenu2 = (question) => {
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

const showMenu = () => {
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

const pause = () => { 
    return new Promise ((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('\n Press ENTER to continue\n', (opt) => {
            readline.close();
            resolve();
        });
    });
}

const main = async() => {
    let opt = '';
    do {    
        opt = await showMenu();
        switch (opt) {
            case '1':
                const username = await showMenu2('Write your username: ');
                const description = await showMenu2("Write task's description: ");

            break;

            case '2':
                updateTask();
            break;
            case '3':
                deleteTask();
            break;
            case '4':
                listTask();
            break;          
            case '5':
                listAll();
            break;
            case '6':
                showTaskState();
            break;
        }
        if (opt !== '0') await pause();
    } while (opt !== '0');        
}

main();