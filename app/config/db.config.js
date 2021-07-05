module.exports = {
    HOST: "localhost",
    PORT: 3308,
    USER: "root",
    PASSWORD: "root",
    DB: "dicedb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};