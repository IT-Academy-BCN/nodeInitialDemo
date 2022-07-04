const config = {
  user: "root",
  password: "root1111_",
  database: "dice_game",
  host: "localhost",
  dialect: "mongodb",
  
  // dialect: "mysql",
  
  port: process.env.PORT || 8888,
}

module.exports = config
