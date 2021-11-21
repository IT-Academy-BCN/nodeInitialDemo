if(process.env.NODE_ENV === 'mongo'){
const {connectMongoDB} = require('./MongoPersistence/db')
connectMongoDB()
}
if(process.env.NODE_ENV === 'mysql'){
const {connectMySQLDB} = require('./MySQLPersistence/db')
connectMySQLDB()
}
