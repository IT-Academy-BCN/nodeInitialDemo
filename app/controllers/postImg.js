const postImg = (req, res) => {
  const body = req.body
  const imagen = req.file

  console.log("imagen guardada en: server/upload")
  res.send("imagen guardada en: server/upload")
}

module.exports = { postImg }
