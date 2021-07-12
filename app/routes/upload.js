const router = require("express").Router();

const fileUpload = require("express-fileupload");
const {
  checkMimeType,
  mediaError,
  hasFile,
} = require("../middlewares/middlewares");
const sendFileInfo = require("../controllers/upload");

router.use(
  fileUpload({
    createParentPath: true,
  })
);
// Middlewares to check correct uploading and handle upload errors
router.use("/", hasFile);
router.use("/", checkMimeType);
router.use("/", mediaError);

router.post("/", sendFileInfo);

module.exports = router;
