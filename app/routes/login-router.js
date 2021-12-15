const jwt = require('jsonwebtoken');
const loginRouter = require('express').Router();

// La funcion esta deberia haberse puesto en controllers.
loginRouter.post('/login', async (req, res) => {
  const userProvided = req.body.user;

  const passwordProvided = req.body.password;
  const user = 'admin';
  const password = '12345';

  // En este lugar, deberia comprobar con la base de datos:
  const passwordCorrect = (userProvided === null || userProvided !== 'admin')
    ? false
    : (password === passwordProvided);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password',
    });
  }

  const userForToken = {
    username: userProvided,
    payload: 'some payload',
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res
    .status(200)
    .send({ token, user });
});

module.exports = loginRouter;
