async function sendSecret(req, res) {
  try {
    res.status(200).send("You have found many, many secrets");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = sendSecret;
