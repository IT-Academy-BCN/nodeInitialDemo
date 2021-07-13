const mongoose = require('mongoose');
const { Schema } = mongoose;

const throwsSchema = new Schema({
  name: String,
  diceOne:  Number,
  diceTwo:  Number,
  player: Schema.Types.ObjectId
});

module.exports = throwsSchema;