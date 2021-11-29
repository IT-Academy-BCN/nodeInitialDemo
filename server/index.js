const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;


require('../database/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const apiRouter = require('../routes/api')

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`✔️  Server ready! & listening on port:${PORT}`)
});

