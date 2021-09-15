const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/xatdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) =>
        console.error('It could not connect to MongoDB:', error.message)
    );
const db = mongoose.createConnection();
  
module.exports = db
