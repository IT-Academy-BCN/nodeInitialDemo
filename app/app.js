const colorette = require('colorette');
const {
    menuDB,
    mainMenu,
    readInput,
    showTasks,
    confirm,
    showChecklist,
    showTaskDetail,
    showCommentTask
} = require('./helpers/interaction');

const TaskService = require('./services/TaskService');

const main = async () => {


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

                tasks = await TaskService.createTask({ title, desc });

                break;

            case '2': // Read all tasks
                let selectedTaskId;
                do {
                    tasks = await TaskService.getTasks();
                    selectedTaskId = await showTasks(tasks);
                    if (selectedTaskId !== '0') {
                        const task = await TaskService.getTask(selectedTaskId);
                        await showTaskDetail(task);
                    }
                    } while (selectedTaskId !== '0');
                
                break;

            case '3': // Read completed tasks

                let selectedCompletedTaskId;
                do {
                    tasks = await TaskService.getCompletedTasks();
                    selectedCompletedTaskId = await showTasks(tasks);
                    if (selectedCompletedTaskId !== '0') {
                        const task = await TaskService.getTask(selectedCompletedTaskId);
                        await showTaskDetail(task);
                    }
                } while (selectedCompletedTaskId !== '0');
                
                break;

            case '4': // Read pending tasks
                let selectedPendingTaskId;
                do {
                    tasks = await TaskService.getPendingTasks();
                    selectedPendingTaskId = await showTasks(tasks);
                    if (selectedPendingTaskId !== '0') {
                        const task = await TaskService.getTask(selectedPendingTaskId);
                        await showTaskDetail(task);
                    }
                } while (selectedPendingTaskId !== '0');
                
                break;

            //! To be fixed: Missing true or false persistence on isCompleted.
            case '5': //Change Pending/Completed
                tasks = await TaskService.getTasks();
                const isCompleted = await showChecklist(tasks);
                tasks.forEach(async(task) => {
                    if (task.isCompleted && !isCompleted.includes(task.id)) {
                        await TaskService.updateTask(task.id, { isCompleted: false, updatedAt: new Date() });
                    } else if (!task.isCompleted && isCompleted.includes(task.id)) {
                        await TaskService.updateTask(task.id, { isCompleted: true, updatedAt: new Date() });
                    }
                })

                break;

            case '6': // Delete task with check
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

            case '7': // Comment task
                let selectedCommentTaskId;
                do {
                    tasks = await TaskService.getTasks();
                    selectedCommentTaskId = await showTasks(tasks);
                    if (selectedCommentTaskId !== '0') {
                        const task = await TaskService.getTask(selectedCommentTaskId);
                        const taskComment = await showCommentTask(task.comment);
                        TaskService.updateTask(task.id, { comment: taskComment, updatedAt: new Date() });
                    }
                    } while (selectedCommentTaskId !== '0');
                
                break;

        }
        

    } while (opt !== '0')
};


main();