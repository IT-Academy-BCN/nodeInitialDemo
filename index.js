const program = require('commander');
const {prompt} = require('inquirer');
const message = require('./src/bienvenida')
const {colors} = require('colors')
const {create, remove, findOne, update} = require('./src/questions')

program
  .version('1.0.0')
  .description(message.yellow)
  
program
  .command('add')
  .alias('a')
  .description('Create a task')
  .action(() => {
    prompt(create).then(answers => console.info(answers))
  })

program
  .command('remove')
  .alias('r')
  .description('Remove a task')
  .action(() => {
    prompt(remove).then(answers => console.info(answers))
  })

program
  .command('update')
  .alias('u')
  .description('Update a task')
  .action(() => {
    prompt(update).then(answers => console.info(answers))
  })

program
  .command('find')
  .alias('f')
  .description('Find one or more tasks')
  .action(() => {
    prompt(findOne).then(answers => console.info(answers))
  })

program.parse(process.argv);