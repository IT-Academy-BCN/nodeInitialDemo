const basicAuth = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth) {
    return res.status(401).send({
      status: false,
      message: 'No authorization header found'
    })
  }

  const [user, password] = auth?.split(':') ?? [null, null]

  if (!user || !password) {
    return res.status(401).send({
      status: false,
      message:
        'Authorization header has not the correct format <username>:<password>'
    })
  }

  if (user !== 'admin' || password !== 'admin') {
    return res.status(401).send({
      status: false,
      message: 'Invalid credentials'
    })
  }

  next()
}

module.exports = {
  basicAuth
}
