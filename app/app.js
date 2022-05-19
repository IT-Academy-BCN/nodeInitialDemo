// Menu llama funciones

/* addTask()
- listTask()
- listAll()
- updateTask()
- deleteTask()
- showTaskState() returns {(pending/ executing/ completed), init date, completation date, userId}

  */

const showMenu = () => {
    console.clear();
    console.log("----- TO-DO App -----");
    console.log('1. Add Task');
    console.log('2. Update Task');
    console.log('3. Delete Task');
    console.log('4. List Task');
    console.log('5. List All');
    console.log('6. Show Task State');
}

showMenu();