const express = require('express');

const pokemonRouter = require('./routes/pokemon.routes');

const app = express();

app.get('/', (req, res) => res.send('TESTING SERVER'));

app.use('/pokemon', pokemonRouter);

const PORT = 3000;
app.listen(PORT, console.log(`listening on port ${PORT}...`));
