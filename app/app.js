require('dotenv').config();
const express = require('express');

const connectDB = require('./db/db.connect');

const app = express();

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await connectDB;
    console.log('connection with DB successful');
    app.listen(PORT, console.log(`listening on port ${PORT}...`));
  } catch (err) {
    console.log(err.message);
  }
};
startServer();
