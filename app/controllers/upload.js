const multer = require("multer");

/**
 * @multer configure/ filter upload file types
 */

const upload = multer({
	dest: "img",
	limits: {
		fileSize: 2000000,
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(jpg|png|PNG|gif)$/)) {
			return cb(
				new Error('Please upload a file with "png, jpg, or gif  extensions"')
			);
		}
		cb(undefined, true);
	},
});

module.exports = upload;
