module.exports = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Cache-control", "no-cache");
    next();

};

