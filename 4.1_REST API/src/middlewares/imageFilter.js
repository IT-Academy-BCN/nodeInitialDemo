const imageFilter = (file, cb) => {
    const validExtensions = ["image/jpg", "image/JPG", "image/jpeg", "image/png", "image/gif"];
    if (validExtensions.includes(file.mimetype)){
        return cb(null, true);
    } else{
        return cb(new Error ('Error 415 invalid extension'), false);
    }
};

module.exports = imageFilter;