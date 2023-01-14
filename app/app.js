const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//basic info for main page
app.get('/', (req, res) => {
    res.json(`Go to /user for json, Go to /upload for image`)
})

//user information
const user = require('./routes/user');
app.use('/user', user)

//img upload
const image = require('./routes/imgUpload');
app.use('/upload', image)

app.listen(port, () =>console.log(`Running on http://localhost:${port}`))