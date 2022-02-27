
if (process.env.NODE_ENV === 'MONGO') {
  const mongoPlug = require('./mongoPlug');
  mongoPlug.mongoConnect()
};


if (process.env.NODE_ENV === 'SQL') {
  const mysqlPlug = require('./mysqlPlug')
  mysqlPlug.mysqlConnect()
};