require('dotenv').config()

const env = {
    mysqlDbHost: process.env.MYSQL_DATABASE_HOST,
    mysqlDbPort: process.env.MYSQL_DATABASE_PORT,
    mongoDbHost: process.env.MONGO_DATABASE_HOST,
    mongoDbPort: process.env.MONGO_DATABASE_PORT,	
    dbUser: process.env.DATABASE_USER,
    dbPass: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME,
}

module.exports = env