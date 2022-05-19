const functions = {addTask, 
                  listTask,
                  listAll,
                  updateTask,
                  deleteTask,
                  showTaskState 
                } = require('./functions');

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
}5

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
                const userName = await showMenu2('Write your username: ');
                const description = await showMenu2("Write task's description: ");
                addTask(userName, description);
            break;
            case '2':
                const id2 = await showMenu2('Write ID to update: ');
                const state = await showMenu2('Select the new state: ');
                updateTask(id2, state);
            break;
            case '3':
                const id3 = await showMenu2('Write ID to delete: ');
                deleteTask(id3);
            break;
            case '4':
                const id4 = await showMenu2('Write ID to list: ');
                listTask(id4);
            break;          
            case '5':
                listAll();
            break;
            case '6':
                const id6 = await showMenu2('Write ID to show state: ');
                showTaskState(id6);
            break;
        }
        if (opt !== '0') await pause();
    } while (opt !== '0');        
}

main();