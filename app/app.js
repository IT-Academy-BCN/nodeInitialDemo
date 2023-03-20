const {envs} = require('./config/config')
const init = require('./helpers/inquirer')

//init terminal task program
init(envs.dbType)
