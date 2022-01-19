#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const message = require('../src/bienvenida')

program
  .version('1.0.0')
  .description(message)
  .option('-j, --json', 'Utilizar Json')
  .option('-s, --sql', 'Utilizar SQL')
  .option('-m, --mongo', 'Utilizar Mongo');

program
  .command('add')
  .alias('a')
  .description('Create a task')

program
  .command('remove')
  .alias('r')
  .description('Remove a task')


program
  .command('update')
  .alias('u')
  .description('Update a task')

program
  .command('find')
  .alias('f')
  .description('Find one or more task')

program.parse(process.argv);