const colorette = require('colorette');
const {
    menuDB,
    mainMenu,
    pause,
    readInput,
    showTasks,
    confirm,
    showChecklist
} = require('./helpers/interaction');

const TaskService = require('./services/TaskService');

const main = async () => {

    try {
        // USAGE OF THE SERVICE
        //* tasks = await TaskService.createTask({title:'Task 1', desc:'Task 1 description'});
        //* tasks = await TaskService.getTasks();
        // tasks = await TaskService.getTask('d28d9a35-7d79-46ef-ab24-fa2c2f079bb7')
        //! tasks = await TaskService.updateTask('d28d9a35-7d79-46ef-ab24-fa2c2f079bb7', {title:'Task updated', desc:'Task 1 description updated'});
        //* tasks = await TaskService.deleteTask('d28d9a35-7d79-46ef-ab24-fa2c2f079bb7');
        //* tasks = await TaskService.getCompletedTasks();
        //* tasks = await TaskService.getPendingTasks();
    } catch (error) {
        console.log(error);
    }

    DB_PROVIDER = await menuDB();

    await TaskService.selectDB(DB_PROVIDER);

    let opt;
    let tasks;

    do {
        // Print the menu and return an option.
        opt = await mainMenu();


        //? In this switch case we will introduce the implementation of the task service in each of the options.
        switch (opt) {
            case '1': // Create task
                const title = await readInput('Title: ')
                const desc = await readInput('Description: ');
                tasks = await TaskService.createTask({ title, desc, comment });
                break;

            case '2': // Read all tasks
                tasks = await TaskService.getTasks();
                await showTasks(tasks);
                break;

            case '3': // Read completed tasks
                tasks = await TaskService.getCompletedTasks();
                await showTasks(tasks);
                break;

            case '4': // Read pending tasks
                tasks = await TaskService.getPendingTasks();
                await showTasks(tasks);
                break;

            //! Missing to implement the update of the tasks
            case '5': // Update task
                tasks = await TaskService.getTasks();
                await showTasks(tasks);
                TaskService.updateTask(tasks, {})
                break;

            //! To be fixed: Missing true or false persistence on isCompleted.
            case '6': //Change Pending/Completed
                tasks = await TaskService.getTasks();
                const isCompleted = await showChecklist(tasks);
                const comment = await readInput('Comment: ');


                break;

            case '7': // Delete task with check
                tasks = await TaskService.getTasks();
                const id = await showTasks(tasks);
                if (id !== '0') {
                    const ok = await confirm('Are you sure?');
                    if (ok) {
                        TaskService.deleteTask(id);
                        console.log(colorette.blackBright('deleted task!'));
                    }
                }
                break;
        }

        await pause();


    } while (opt !== '0')
};


main();