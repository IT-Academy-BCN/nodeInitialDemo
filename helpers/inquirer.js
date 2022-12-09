const inquirer = require('inquirer');
const colors = require('colors');

// CREATES OPTIONS FOR LOGIN MENU
const loginOptions = [
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
];

// CREATES FIRST SCREEN AFTER LAUNCHING APP
const loginMenu = async () => {
  console.log('==========================='.cyan);
  console.log('          WELCOME          '.gray);
  console.log('==========================='.cyan);

  const { loginOpt } = await inquirer.prompt(loginOptions);
  return loginOpt;
};

// SCREEN AFTER LOGIN IS SELECTED
const loginScreen = async () => {
  const user = await inquirer.prompt([
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
  console.log({ user });
  return user;
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
  const login = await loginMenu();
  const user = await loginScreen();
  // await confirmScreen();
};
testing();

module.exports = loginMenu;
