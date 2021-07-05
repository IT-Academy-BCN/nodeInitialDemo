const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/imgs')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}`)
  }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Allowed only .png, .jpg, .jpeg and .gif'));
        }
    }
});

module.exports = upload