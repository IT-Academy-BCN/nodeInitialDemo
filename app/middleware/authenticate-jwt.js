const jwt = require('jsonwebtoken');
const authenticationRouter = require('express').Router();

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

authenticationRouter.all('*', async (req, res, next) => {
  const token = getTokenFrom(req);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    console.log(`Authenticated as ${decodedToken.username}`);
  } catch (err) { next(err); }
  next();
});

module.exports = authenticationRouter;
