exports.cacheController = (req, res, next) => {
    res.setHeader('Cache-control', 'no-cache');
    next();
}