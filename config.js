require('dotenv').config();

const { PORT } = process.env;
const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI;

const mysqlConfig = {
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
};

let dbByEnv;
let controllersByEnv;

if (process.env.NODE_ENV === 'mongo-persistence') {
  dbByEnv = 'mongo';
  controllersByEnv = '../controllers/mongoose-controllers';
} else if (process.env.NODE_ENV === 'mysql-persistence') {
  dbByEnv = 'mySQL';
  controllersByEnv = '../controllers/sequelize-controllers';
}

module.exports = {
  MONGODB_URI,
  PORT,
  mysqlConfig,
  dbByEnv,
  controllersByEnv,
};
