// getting-started.js
const mongoose = require('mongoose');

// Log Errors
main().catch(err => console.log(err));

// Connect to Mongo DB
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
console.log("start mongo");

// Create Schema
const kittySchema = new mongoose.Schema({
  name: String
});
console.log("new schema");

// Create
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

// Create document
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); //

// crear funcio asynch
async function fetchFun() {
  
  // save document to Mongo DB
  await fluffy.save();
  fluffy.speak();

  // show documents from Mongo DB
  const kittens = await Kitten.find();
  console.log(kittens);

  // filter documents by name
  await Kitten.find({ name: /^fluff/ });

}

fetchFun();
