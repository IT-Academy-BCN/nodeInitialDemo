const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const User = require("./userModel.js")(sequelize,Sequelize);

try{
    User.sync();
} catch(err){
    console.error("Error while creating the Users table");
}

const Game = require("./gameModel.js")(sequelize,Sequelize);

try{
    User.hasMany(Game);
    Game.belongsTo(User);
    Game.sync();
} catch(err){
    console.error("Error while creating the Games tables");
}


db.users = User;
db.games = Game;

module.exports = db;