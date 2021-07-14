const express = require("express");
const router = express.Router();
/**
 * @route configure
 * @get route for user { Object}
 *
 */
// exe 1
router.get("/user", (req, res) => {
	const user = { name: "Sayeed", age: 30, url: req.headers.host };
	res.json({ user });
});

module.exports = router;