const auth = require('basic-auth');

const userForCheck = require('../models/usersForCheck');

const checkUsers = (req, res, next) => {
  const users = auth(req);

  if (users === undefined || users.name !== userForCheck.name || users.pass !== userForCheck.pass) {
    res.statusCode = 401;
    res.json({
      "error": " Error, unauthorized"
    });
    return;
  } else {
    const user = res.json({
      "name": users.name,
      "pass": users.pass,
      "message": "Access granted"
    })
    return user;
  }
  next()
}

module.exports = checkUsers