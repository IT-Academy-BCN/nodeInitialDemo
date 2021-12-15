module.exports.islogin = (req, res, next) => {
  try {
    if (!req.headers.userid) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: 'Invalid request!'
    });
  }
};