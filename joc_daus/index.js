const express = require('express');
const app = express();
const routes = require('./routes/api');

//connect to database
require('./database/DBConnection');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//initialize routes
app.use('/', routes);

//start server
app.listen(4000, () => {
    console.log('✔️  Server listening...')
});



