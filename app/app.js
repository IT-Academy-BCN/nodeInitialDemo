const env = require('./config/config')
const init = require('./helpers/inquirer')
const Mongo = require('./config/db/mongo');
const Mysql = require('./config/db/mysql')

//init db's
const mysqlInstance = new Mysql(env)
mysqlInstance.init()

const mongoInstance = new Mongo(env)
mongoInstance.init()

//init program
init()
