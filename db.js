const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://nodeInitialDemo_user:PQB4Dmq5ER0ZAdlq@cluster0.oqtyi.mongodb.net/chat?retryWrites=true&w=majority')
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));