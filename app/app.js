require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('HOMEPAGE');
});

const PORT = process.env.PORT || 3000;
const start = async () => {
  // connect to DB
  app.listen(PORT, console.log(`listening on port ${PORT}...`));
};

start();
