const express = require('express');
const exhb = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path');
const db = require('../database/db.js')
const apiRouter = require('../routes/api')

const app = express();

require('../database/db');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(` ✔️  Server ready! & listening on port: ${PORT}`)
});

