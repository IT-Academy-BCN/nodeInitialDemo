const express = require('express');
const app = express();
const port = 8080;

app.set('view-engine', 'ejs');
app.use(express.json());


//basic info for main page
app.get('/', (req, res) => {
    res.send(`Go to /user for json \nGo to /upload for image`)
})

//user information
const user = require('./routes/user');
app.use('/user', user)

//img upload
const image = require('./routes/imgUpload');
app.use('/upload', image)

app.listen(port, () =>console.log(`Running on http://localhost:${port}`))