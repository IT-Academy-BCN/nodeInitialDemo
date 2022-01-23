const mongoose = require("mongoose");

//task Schema
const taskSchema = mongoose.Schema({
  taskName: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String },
  user: { type: String },
});

//Define and export
module.exports = mongoose.model("Task", taskSchema);
