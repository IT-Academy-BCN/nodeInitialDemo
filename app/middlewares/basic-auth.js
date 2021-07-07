async function basicAuth(req, res, next) {
  try {
    // Check if the request has basic auth in it's headers
    if (!req.headers.authorization) throw new Error("401");
    // Check if the auth is correct
    else {
      const auth = req.headers.authorization.split(" ")[1];
      const [user, password] = Buffer.from(auth, "base64")
        .toString()
        .split(":");
      if (user === "Muy" && password === "Secreto") next();
      else {
        throw new Error("401");
      }
    }
  } catch (err) {
    next(err.message);
  }
}

module.exports = basicAuth;
