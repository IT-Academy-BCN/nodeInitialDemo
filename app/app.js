require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  //connect DB
  app.listen(PORT, console.log(`listening on port ${PORT}...`));
};
startServer();
