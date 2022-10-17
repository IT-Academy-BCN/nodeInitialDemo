
const mongoose = require('mongoose');

module.exports = async () => {
    
    try {
    let mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`Connected to ${process.env.DB_NAME} DB`);
    

    } catch (err) {
        console.log(err.message);
    }
}