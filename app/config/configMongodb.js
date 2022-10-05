const tasquesSchema = require('../models/tasquesModel')
const mongoose = require('mongoose');

mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    // return start_up();
  });
  
  mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
  });

mongoose.connect('mongodb://localhost/devteams');
dbTasques = mongoose.model("Tasques", tasquesSchema);

module.exports = dbTasques;