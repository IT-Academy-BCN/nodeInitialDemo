const program = require('commander');
const Add = require('../cmds/create');
const add = new Add();
program
  .command('json')
  .alias('j')
  .description('Almacenar en Json')
  .action(add.json);

program
  .command('sql')
  .alias('s')
  .description('Almacenar en SQL')
  .action(add.sql)

  program
  .command('mongo')
  .alias('m')
  .description('Almacenar en Mongo')
  .action(add.mongo)

program.parse(process.argv);