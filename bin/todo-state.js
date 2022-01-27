const program = require('commander');
const setState = require('../cmds/setState');
const state = new setState();

  program
    .command('json')
    .alias('j')
    .description('Modificar Estado en Json')
    .action(state.json)
  program
    .command('sql')
    .alias('s')
    .description('Modificar Estado en SQL')
    .action(state.sql)
  program
    .command('mongo')
    .alias('m')
    .description('Modificar Estado en Mongo')
    .action(state.mongo)

program.parse(process.argv);