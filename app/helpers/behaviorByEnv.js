const { connectMongo } = require('../data-base/db-mongo');
const { connectSequelize } = require('../data-base/db-mySQL');
const { dbByEnv } = require('../../config');

const selectDB = () => {
  if (dbByEnv === 'mongo') { connectMongo(); } else if (dbByEnv === 'mySQL') {
    connectSequelize();
  }
};

module.exports = { selectDB };
