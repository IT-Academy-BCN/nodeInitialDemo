async function sendSecret(req, res) {
  try {
    res.status(200).json("You have found many, many secrets");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = sendSecret;
