const getUser = (req, res) => res.send({
    name: 'David',
    age: 26,
    requestedFrom: req.headers.host
});

module.exports = {
    getUser
};