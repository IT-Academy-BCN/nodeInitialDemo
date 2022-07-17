const jwt = require('jsonwebtoken');

// middleware verifyJWT
module.exports = async (req, res, next) => {
  const authHeader = req.headers['authorization']
  // bearer token
  const token = authHeader && authHeader.split(' ')[1] 
  if (token === null) return res.sendStatus(401)
  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) return res.sendStatus(403)
      req.userName = decoded.userName;
      req.userId = decoded.userId;
      next()
  })
}

