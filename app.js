const addTask = require('./controllers/addtask');
const listTask = require('./controllers/listtask');  
const updateTask = require('./controllers/updatetask');  
const deleteTask = require('./controllers/deletetask');  
const showTaskState = require('./controllers/showtaskstate');  
const searchById = require('./controllers/searchbyid');  
const readData = require('./controllers/readData');  

const main = require('./menu/main');
const showMenu = require('./menu/showMenu');

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

(async () => {
    let opt = '';
    do {    
        opt = await main();
        switch (opt) {
            case '1':
                const userName = await showMenu('Write your username: ');
                const description = await showMen2("Write task's description: ");
                addTask(userName, description);
            break; 
            case '2':
                const id2 = await showMenu('Write ID to update: ');
                if (searchById(readData(), id2) === -1){
                    console.log("Task doesn't exist.");
                } else {
                    const state = await showMenu2('Select pending/executing/completed: ');
                    updateTask(id2, state);
                }    
            break;
            case '3':
                const id3 = await showMenu('Write ID to delete: ');
                deleteTask(id3);
            break;
            case '4':
                const id4 = await showMenu('Write ID to list: ');
                listTask(id4);
            break;          
            case '5':
                listAll();
            break;
            case '6':
                const id6 = await showMenu('Write ID to show state: ');
                showTaskState(id6);
            break;
        }
        if (opt !== '0') await pause();
    } while (opt !== '0');        
})();