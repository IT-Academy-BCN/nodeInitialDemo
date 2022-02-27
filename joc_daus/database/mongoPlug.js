const mongoose = require('mongoose');

function mongoConnect() {
  try {
    mongoose.connect('mongodb://127.0.0.1/players')
    console.log("✔️  Connect to mongoDB")
  } catch (err) {
    console.log(`❌ NOT connected to mongoDB ${err.message}`)
  }
};

module.exports = {"mongoConnect": mongoConnect}