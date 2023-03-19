const server = require('./config/server')
const init = require('./helpers/inquirer')

//init terminal task program
init(server.database.getType())

