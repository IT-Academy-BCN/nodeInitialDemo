const mongoose = require('mongoose');

module.exports = async() => {
    
    try {
       await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected successfully.');
    } catch(err){
        console.log('Error when connecting to DB.');
    }
}
