const server = require('./config/server')
const TaskSerivice = require('./tasks/service')
const init = require('./helpers/inquirer')


init(server.database, {task: TaskSerivice})
