const postImg = (req, res) => {
  const body = req.body
  const imagen = req.file

  console.log("imagen guardada en: app/upload")
  res.send("imagen guardada en: app/upload")
}

module.exports = { postImg }
