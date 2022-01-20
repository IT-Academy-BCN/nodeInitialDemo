const program = require('commander');
const Update = require('../cmds/update');
const update = new Update();

  program
    .command('json')
    .alias('j')
    .description('Modificar en Json')
    .action(update.json)
  program
    .command('sql')
    .alias('s')
    .description('Modificar en SQL')
    .action(update.sql)
  program
    .command('mongo')
    .alias('m')
    .description('Modificar en Mongo')
    .action(update.mongo)

program.parse(process.argv);