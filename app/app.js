const {
    interactiveMenu,
    pause,
    readInput,
    taskListDelete,
    confirm,
    showChecklist
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

    do {
        // Print the menu and return an option.
        opt = await interactiveMenu();

        //? In this switch case we will introduce the implementation of the task service in each of the options.
        switch (opt) {
            case '1': // Create task
                const desc = await readInput('Description: ');
                tasks = await TaskService.createTask({ desc });
                break;

            case '2': // Read all tasks
                tasks = await TaskService.getTasks(desc);
                break;

            case '3': // Read completed tasks
                tasks = await TaskService.getCompletedTasks();
                break;

            case '4': // Read uncompleted tasks
                tasks = await TaskService.getPendingTasks();
                break;

            case '5': // Update task
                const ids = await showChecklist();
                tasks = await TaskService.updateTask();
                break;

            case '6': // Delete task with check
                tasks = await TaskService.deleteTask();
                const id = await taskListDelete(tasks);
                if (id !== '0') {
                    const ok = await confirm('Are you sure?');
                    if (ok) {
                        TaskService.deleteTask();
                        console.log('deleted task');
                    }
                }
                break;
        }


        await pause();
    } while (opt !== '0')
};


main();