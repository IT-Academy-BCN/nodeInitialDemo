const notCached = (req, res, next) => {
    res.set('Cache-Control', 'no-cache');
    next();
}

module.exports = {
    notCached
};