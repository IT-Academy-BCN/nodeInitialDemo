// Setting middleware for Cache control ("POST" methods) 
let setCache = (req, res, next) => {
    if (req.method == 'POST') {
        res.set("Cache-control", "no-cache");
    } else {
        res.set("Cache-control", "no-store");
    }

    next();
}

// Setting middleware for Authorization for endpoint path: '/time'
let auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized HTTP Request");
  }
  next();
}

module.exports = {
    setCache,
    auth
}