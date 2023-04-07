const mymetypes = ["image/jpg", "image/png", "image/gif"]
const dirname = "./app/upload/"

const postImg = (req: any, res: any) => {
  if (!req.files) {
    return res.status(400).send("No file attached")
  }
  if (mymetypes.includes(req.files.imagen.mimetype)) {
    req.files.imagen.mv(dirname + Date.now() + req.files.imagen.name)
    return res.status(200).send("image uploaded")
  } else return res.status(400).send("JPG/PNG/GIF Only")
}

export default postImg
