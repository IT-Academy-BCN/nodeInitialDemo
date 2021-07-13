const mongoose = require('mongoose');
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.set('useCreateIndex', true);

const playerSchema = new Schema({
  id:  { type: Number } , 
  name:  { type: String , required: true, unique: true }, 
  registeredDate:  {type: Date } 
});

playerSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = playerSchema;