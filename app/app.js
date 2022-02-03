const { 
    interactiveMenu,
    pause,
    readInput
} = require('./helpers/interaction');

const TaskService = require('./services/TaskService');

const main = async () => {
    let opt = '';
    let tasks;
    try {
        // USAGE OF THE SERVICE
        // tasks = await TaskService.createTask({title:'Task 1', desc:'Task 1 description'});
        // tasks = await TaskService.getTasks();
        // tasks = await TaskService.getTask('d28d9a35-7d79-46ef-ab24-fa2c2f079bb7')
        // tasks = await TaskService.updateTask('d28d9a35-7d79-46ef-ab24-fa2c2f079bb7', {title:'Task updated', desc:'Task 1 description updated'});
        // tasks = await TaskService.deleteTask('d28d9a35-7d79-46ef-ab24-fa2c2f079bb7');
        // tasks = await TaskService.getCompletedTasks();
        // tasks = await TaskService.getPendingTasks();
    } catch (error) {
        console.log(error);
    }

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