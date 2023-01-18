require('dotenv').config();
const express = require('express');

const app = express();

require('./db/db.connect');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('HOMEPAGE');
});

const PORT = process.env.PORT || 3000;
const start = async () => {
  // connect to DB
  app.listen(PORT, console.log(`listening on port ${PORT}...`));
};

start();
