const express = require("express");
const router = express.Router();
const upload = require("../controllers/upload");
router.post(
	"/upload",
	upload.single("avatar"),
	(req, res) => {
		res.send("photo uploaded successfully");
	},
	(err, req, res, next) => {
		res.status(400).send({ error: err.message });
	}
);
module.exports = router;
