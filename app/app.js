const { interactiveMenu,
    pause,
    readInput,
    taskListDelete,
    confirm,
    showChecklist
} = require('./helpers/interaction');

const { saveJsonDB,
    readJsonDB
} = require('./repositories/JSONRepository');

const main = async () => {
    let opt = '';
    const tasksJsonDB = readJsonDB();

    //! Add tasksJsonDB() to the tasks service persistence method (It could be a conditional for example).


    do {
        // Print the menu and return an option.
        opt = await interactiveMenu();

        //? In this switch case we will introduce the implementation of the task service in each of the options.
        switch (opt) {
            case '1': // Create task
                const desc = await readInput('Description: ');
                createTask(task);
                break;

            case '2': // Read all tasks

                break;

            case '3': // Read completed tasks

                break;

            case '4': // Read uncompleted tasks

                break;

            case '5': // Update task

                break;

            case '6': // Delete task with check
                const id = await taskListDelete(); //! Add to the parameter a function with all tasks in an array.
                if (id !== '0') {
                    const ok = await confirm('Are you sure?');
                    if (ok) {
                        deleteTask(taskId);
                        console.log('deleted task');
                    }
                }
                break;
        }


        await pause();
    } while (opt !== '0')
};


main();