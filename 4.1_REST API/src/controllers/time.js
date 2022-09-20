const getTime = (req, res) => {

  try {
    res.status(200).send({ date: new Date().toLocaleString()});

  } catch(err) {
    res.status(500).send({
      status: "error",
      message: "Error 500: Uuups, algo no funciona en el servidor."
    });
  }
}

module.exports = getTime;

