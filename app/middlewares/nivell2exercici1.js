const express = require("express")

const middle = (req, res, next) => {
  res.set("Cache-Control", "no-cache")
  res.header("Access-Control-Allow-Origin", "*")
  req.body = { name: "David", age: 37, password: "asd" }
  // console.log(req.body);
  if (!req.body.password) {
    res.status = 401
    // res.send(res.status);
  }
  next()
}

module.exports = middle
