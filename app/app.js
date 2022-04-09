const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

const { cache, auth } = require('./middlewares');

const app = express();

const routes = require('./routes');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cache.notCached);
app.use('/time' ,auth.basicAuth);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    createParentPath: true
}));

// Routes
app.use('/', routes);


// Setting up the server
app.listen(3000, () => console.log('App listening on port 3000!'))


module.exports = {
    app
}
