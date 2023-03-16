require('dotenv').config()

const env = {
    dbHost: process.env.DATABASE_HOST,		
    dbUser: process.env.DATABASE_USER,
    dbPass: process.env.DATABASE_PASSWORD,
    dbPort: process.env.DATABASE_PORT,
    dbName: process.env.DATABASE_NAME,
    db: process.env.DATABASE
}

module.exports = {
    envs : env
}