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
    // const tasksJsonDB = readJsonDB();

    // If a json with tasks exists, it will load it into the app (Persistence).
    
    // if (tasksJsonDB){
    //     getTasks(tasksJsonDB);
    // };

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
                getTasks()
                break;

            case '3': // Read completed tasks
                //! Tasks isCompleted(true); Create the function with the boolean
                break;

            case '4': // Read uncompleted tasks
                //! Tasks isCompleted(false); Create the function with the boolean
                break;

            case '5': // Update task
                const ids = await showChecklist();
                //! Add completed/pending tasks toggle
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