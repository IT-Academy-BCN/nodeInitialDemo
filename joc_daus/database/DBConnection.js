const mongoose = require('mongoose');

if (process.env.NODE_ENV = "mongoDB") {
        mongoose.connect('mongodb://127.0.0.1/players')
        .then( () => console.log("✔️  Connect to mongoDB"))
        .catch( err => console.log(`❌ NOT connected to mongoDB ${err.message}`))
};

if (process.env.NODE_ENV = "mySQL") {
 
};