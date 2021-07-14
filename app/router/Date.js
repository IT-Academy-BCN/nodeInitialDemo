const express = require("express");
const router = express.Router();
router.post("/date", (req, res, next) => {
	const date = new Date();
	const day = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	console.log(req.body);
	res.json({ day, time, username: req.body.username });
});
module.exports = router;
