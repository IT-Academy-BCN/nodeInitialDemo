async function authErrorHandler(err, req, res, next) {
  try {
    if (err === "401") {
      res.header("WWW-Authenticate", "Basic");
      res.status(401).send("You're not authenticated");
    } else next();
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = authErrorHandler;
