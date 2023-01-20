function authorize(req, res, next) {
  const { username, password } = req.body;
  if (username && password) {
    next();
  } else
    res
      .status(401)
      .json({
        success: false,
        msg: 'Unauthorized: username or password are incorrect',
      });
}
module.exports = authorize;
