//const path = require("path");
//const express = require('express');
const router = require('express').Router();
// we call the file of the milldeware
const optionsFile = require('../middleware/upload.js');
const uploadEmpty = require("../controller/upload.js");

const controlCache = require('../middleware/cacheControl');
const dateUser = require('../controller/dateUser');

const checkUser = require('../middleware/checkUser');

//TODO creation of user.json//////////////
const person = {
  name: 'Yoda',
  age: 22,
  url: ''
};

//main route
router.get('/', (req, res) => {
  return res.json({
    message: `This is the home page(endpoint)`
  });
});

//user route
router.get('/user', function (req, res) {
  person.url = req.protocol + '://' + req.get('host') + req.originalUrl
  res.json(
    person
  )
  console.log(`name: ${person.name} age: ${person.age} url: ${person.url}`)
});

// upload route
router.post("/upload", optionsFile, uploadEmpty);

//userDate
router.post('/userDate', controlCache, dateUser);

//checkUser
router.post('/auth', checkUser);

module.exports = router;