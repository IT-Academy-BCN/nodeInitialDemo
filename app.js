require('colors');

const {
  inquirerMenu,
  confirmScreen,
  readInput,
  loginMenu,
  listToDelete,
  confirm,
  listToComplete,
  loginScreen,
} = require('./helpers/inquirer');
const Tasks = require('./models/Tasks');
// const { saveDB, readDB } = require('./helpers/save-file');

const main = async () => {
  let option;
  let login;
  let user;
  const taskList = new Tasks();
  // const tasksDB = readDB();

  // login = await loginMenu();
  // if (login === '1') {
  //   user = await loginScreen();
  // }

  // if (tasksDB) {
  //   taskList.loadTasks(tasksDB);
  // }

  do {
    console.clear();
    login = await loginMenu();
    if (login === '1') {
      user = await loginScreen();
    }

    option = await inquirerMenu(user);

    // switch (option) {
    //   case '1':
    //     const newTask = await readInput('Write task');
    //     taskList.createTask(newTask, user);
    //     break;

    //   case '2':
    //     taskList.completeList(user);
    //     break;

    //   case '3':
    //     taskList.listCompletedTasks(true, user);
    //     break;

    //   case '4':
    //     taskList.listCompletedTasks(false, user);
    //     break;

    //   case '5':
    //     const ids = await listToComplete(taskList.newList(user));
    //     taskList.toggleCompleted(ids);
    //     break;

    //   case '6':
    //     const id = await listToDelete(taskList.newList(user));
    //     if (id !== '0') {
    //       const confirmDelete = await confirm('Are you sure you want to delete?');
    //       if (confirmDelete) {
    //         taskList.deleteTask(id);
    //         console.log('Task deleted');
    //       }
    //     }
    //     break;
    // }
    // saveDB(taskList.getList);

    await confirmScreen();
  } while (option !== '0');
};

main();
