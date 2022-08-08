require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const mysqlConfig = {
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME
};

let dbENV;
let controllersENV;

if (process.env.NODE_ENV === 'mongo') {
    dbENV = './databases/db-mongo';
    controllersENV = '../controllers/controllers-mongo';
} else if (process.env.NODE_ENV === 'mysql') {
    dbENV = './databases/db-mysql';
    controllersENV = '../controllers/controllers-mysql';
} else if (process.env.NODE_ENV === 'json') {
    dbENV = './databases/db-json';
    controllersENV = '../controllers/controllers-json';
}

module.exports = {
  MONGODB_URI,
  PORT,
  mysqlConfig,
  dbENV,
  controllersENV
};