const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'editor',
      name: 'story',
      message: 'Tell me a story, a really long one!',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.story);
  });