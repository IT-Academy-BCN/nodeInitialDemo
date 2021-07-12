const router = require("express").Router();

const fileUpload = require("express-fileupload");
const {
  checkMimeType,
  mediaError,
  isUpload,
} = require("../middlewares/middlewares");

router.use(
  fileUpload({
    createParentPath: true,
  })
);
// Middlewares to check correct uploading and handle upload errors
router.use("/", isUpload);
router.use("/", checkMimeType);
router.use("/", mediaError);

router.post("/", async (req, res) => {
  res.status(201).send({
    status: 201,
    message: "File is uploaded",
    mimetype: req.files.filesample.mimetype,
  });
});

module.exports = router;
