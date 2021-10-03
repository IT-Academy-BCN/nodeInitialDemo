//const path = require("path");
//const express = require('express');
const router = require('express').Router();
// we call the file of the milldeware
const optionsFile = require('../middleware/upload.js');
const uploadEmpty = require("../controller/upload.js");

//TODO creation of user.json//////////////
const person = {
  name: 'Yoda',
  age: 22,
  url: ''
};

//main route
router.get('/', (req, res) => {
  return res.send(`This is the home page(endpoint)`);
});

//user route
router.get('/user', function (req, res) {
  person.url = req.protocol + '://' + req.get('host') + req.originalUrl
  res.send(
    person
  )
  console.log(`name: ${person.name} age: ${person.age} url: ${person.url}`)
});

// upload route
router.post("/upload", optionsFile, uploadEmpty)


module.exports = router;













//? evaluar error de ruta
// try {
//   const {
//     file 
//   } = req
//   console.log(file)
//   console.log(`Storage location is in ${req.hostname}/${req.file.path}`)
//   return res.send(file)
// } catch (err) {
//   console.error("Error", err);
// }
//});