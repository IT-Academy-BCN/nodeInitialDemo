// Crea un servidor con Express que retorne a una petición GET a la endpoint / user un json con tu nombre, edad y la url desde donde se hace la petición.

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
