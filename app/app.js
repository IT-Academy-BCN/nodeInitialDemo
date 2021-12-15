/* eslint-disable max-len */
const express = require('express');
const { selectDB } = require('./helpers/behaviorByEnv');

const app = express();
selectDB();
const playersRouter = require('./routes/player-router');
const loginRouter = require('./routes/login-router');
const authenticationRouter = require('./middleware/authenticate-jwt');
const { unknownEndpoint, errorHandler } = require('./middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the dice Game!!!. Log-in on /login');
});

app.use('/', loginRouter);
app.use(authenticationRouter);
app.use('/players', playersRouter);
app.use(errorHandler, unknownEndpoint);
module.exports = app;
