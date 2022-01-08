
const express = require('express'); 
const app = express();
const http = require('http').Server(app);  
//const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const io = require('socket.io')(http, {cors: {origin: "*"} });
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('./models/user');



require('./sockets')(io);

app.options('*', cors());
app.use( cors() );


app.post('/signup', upload.none(), function(req, res) {

    User.create({ username: req.body.username, password: req.body.password }, (err, user) => {
        console.log(user);
        if (err) {
            res.status(500).send('Error user NOT registered');
        } else {
            res.status(200).send('User registered!');
        }
    });

});


app.post('/login', upload.none(), function (req, res) {

    const password  = req.body.password;

    User.findOne({ username: req.body.username}, (err, user) => {
        console.log('1',user);
        if (err) {
            res.status(500).send('incorrect password or username');               
        } else if (!user) {
            res.status(500).send('user NOT find')
        } else {
            bcrypt.compare( password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send('access granted');
                } else if (!result) {
                    res.status(400).send('access NOT granted');
                } else {
                    res.statusCode(500).send('user or password NOT correct')
                }
            });
            // user.comparePassword({ password: req.body.password}, (err, resolve) => {
            //     console.log('2',user.password)
            //     console.log('5',resolve)
            //     if (err) {
            //         res.status(500).send('Error! user not find')
            //     } else if (resolve) {
            //         res.status(200).send('user access granted')
            //     } else {
            //         res.status(500).send('Error! incorrect password or username'); 
            //     }
            // });    
        }

    });    

});


// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: false }));

// database connection
mongoose.connect('mongodb://localhost/xipxat')
    .then(db => console.log('✔️  database ready!'))
    .catch(err => console.log(`❌ database NOT ready`))

// settings
const PORT = process.env.PORT || 3000;

// starting server
http.listen(PORT, () => {
    console.log(`✔️  Server ready on port: ${PORT}`);
});
