const express = require('express');

const pokemonRouter = require('./routes/pokemon.routes');
const pageNotFound = require('./middlewares/not-found.middleware');
const app = express();

app.get('/', (req, res) => res.send('TESTING SERVER'));

app.use('/pokemon', pokemonRouter);

app.use(pageNotFound);

const PORT = 3000;
app.listen(PORT, console.log(`listening on port ${PORT}...`));
