const express = require("express")
const fs = require("fs")
const users = require("../users/user.json")

const postTime = (req, res) => {
  const day = new Date()
  res.send(day)
}

module.exports = postTime
