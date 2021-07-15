const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");


router.post("/upload", controller.upload);
router.get("/files", controller.getListFiles);
router.get("/files/:name", controller.download);

module.exports = router;



// let routes = (app) => {
//   router.post("/upload", controller.upload);
//   router.get("/files", controller.getListFiles);
//   router.get("/files/:name", controller.download);

//   app.use(router);
// };


