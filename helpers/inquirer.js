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
  console.log('================================'.cyan);
  console.log(`   Choose an option, ${user}    `);
  console.log('================================\n'.cyan);

  const option = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: [
        {
          value: '1',
          name: `${'1.'.blue} Create a task`,
        },
        {
          value: '2',
          name: `${'2.'.blue} List task(s)`,
        },
        {
          value: '3',
          name: `${'3.'.blue} List completed task(s)`,
        },
        {
          value: '4',
          name: `${'4.'.blue} List pending task(s)`,
        },
        {
          value: '5',
          name: `${'5.'.blue} Complete task(s)`,
        },
        {
          value: '6',
          name: `${'6.'.blue} Delete task(s)`,
        },
        {
          value: '0',
          name: `${'0.'.blue} Exit`,
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

const testing = async () => {
  let user;
  let option;
  let login;
  login = await loginMenu();
  user = await loginScreen();
  option = await inquirerMenu(user);
  // await confirmScreen();
};
// testing();

module.exports = { loginMenu, loginScreen, confirmScreen, inquirerMenu };
