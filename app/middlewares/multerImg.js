const multer = require("multer")
const path = require("path")
const mymetypes = ["image/jpg", "image/png", "image/gif"]

const storage = multer.diskStorage({
  destination: "app/upload",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  },
})

const uploadImg = multer({
  dest: "app/upload",
  storage: storage,
  fileFilter: (req, file, cb) => {
    // cb = callback
    if (mymetypes.includes(file.mimetype)) cb(null, true)
    else cb(new Error("Solo se acepta png, jpg o gif"), false)
  },
  limits: {
    fileSize: 1000000,
  },
})

module.exports = {
  uploadImg,
}
