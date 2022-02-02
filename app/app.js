const { 
    interactiveMenu,
    pause,
    readInput
} = require('./helpers/interaction');

const TaskService = require('./services/TaskService');
const {Task} = require('./models/TaskModel');

const main = async () => {
    let opt = '';
    let tasks;
    try {
        tasks = await TaskService.createTask(new Task({title:'Task 1', desc:'Task 1 description'}));
    } catch (error) {
        console.log(error);
    }
    console.log(tasks);
    //! Add tasksJsonDB() to the tasks service persistence method (It could be a conditional for example).


    do {
        // Print the menu and return an option.
        opt = await interactiveMenu();

        //? In this switch case we will introduce the implementation of the task service in each of the options.
        switch (opt) {
            case '1':
                const desc = await readInput('Description: ')
                break;
        }


        await pause();
    } while (opt !== '0')
};


main();