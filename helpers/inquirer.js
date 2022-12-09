const inquirer = require('inquirer');
const colors = require('colors');

// CREATES FIRST SCREEN AFTER LAUNCHING APP
const loginMenu = async () => {
  console.log('==========================='.cyan);
  console.log('          WELCOME          '.gray);
  console.log('==========================='.cyan);

  const { loginOpt } = await inquirer.prompt([
    {
      type: 'list',
      name: 'loginOpt',
      message: 'Please log in',
      choices: [
        {
          value: '1',
          name: `${'1'.red} Login`,
        },
      ],
    },
  ]);
  return loginOpt;
};

// SCREEN AFTER LOGIN IS SELECTED
const loginScreen = async () => {
  const { user } = await inquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'Enter your username (case sensitive): ',
      validate(value) {
        if (value.length === 0) {
          return 'invalid username, 0 characters typed';
        }
        return true;
      },
    },
  ]);
  return user;
};

// CREATING MAIN MENU
const inquirerMenu = async (user) => {
  console.clear();
  console.log('================================'.cyan);
  console.log(`   Choose an option, ${user}    `);
  console.log('================================\n'.cyan);

  const { option } = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: [
        {
          value: '1',
          name: `${'1.'.red} Create a task`,
        },
        {
          value: '2',
          name: `${'2.'.red} List task(s)`,
        },
        {
          value: '3',
          name: `${'3.'.red} List completed task(s)`,
        },
        {
          value: '4',
          name: `${'4.'.red} List pending task(s)`,
        },
        {
          value: '5',
          name: `${'5.'.red} Complete task(s)`,
        },
        {
          value: '6',
          name: `${'6.'.red} Delete task(s)`,
        },
        {
          value: '0',
          name: `${'0.'.red} Exit`,
        },
      ],
    },
  ]);
  return option;
};
// ADDS A STOP AFTER EACH SELECTION
const confirmScreen = async () => {
  const pause = await inquirer.prompt([
    {
      type: 'input',
      name: 'pause',
      message: `\npress ${'ENTER'.cyan} to continue`,
    },
  ]);
  return pause;
};

// CREATION OF A NEW TASK MENU
const readInput = async (message) => {
  const { description } = await inquirer.prompt([
    {
      type: 'input',
      name: 'description',
      message: message,
      validate(value) {
        if (value.length === 0) {
          return 'Please enter a message';
        }
        return true;
      },
    },
  ]);
  return description;
};

// LIST THAT SHOWS WHEN DELETING TASKS
const listToDelete = async (tasks) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}`.green;
    return {
      value: task.id,
      name: `${index}. ${task.desc}`,
    };
  });
  choices.push({
    value: '0',
    name: `${'0.'.green} Cancel`,
  });
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices,
    },
  ];
  const { id } = await inquirer.prompt(questions);
  return id;
};

// SCREEN THAT CONFIRMS IF YOU WANT TO DELETE
const confirm = async (message) => {
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: message,
    },
  ]);
  return confirm;
};

//SCREEN THAT SHOWS THE LIST TO COMPLETE OR PEND TASKS
const listToComplete = async (tasks) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}`.green;
    return {
      value: task.id,
      name: `${index}. ${task.desc}`,
      checked: task.completedOn ? true : false,
    };
  });

  const { ids } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Choose the task(s) to complete',
      choices,
    },
  ]);
  return ids;
};

module.exports = {
  loginMenu,
  loginScreen,
  confirmScreen,
  inquirerMenu,
  readInput,
  listToDelete,
  confirm,
  listToComplete,
};
