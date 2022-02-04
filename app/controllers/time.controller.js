
const getTime =  (req, res) => {
    const date = new Date();
    res.send({
        time: date.toLocaleString()
    });
};


module.exports = {
    getTime
};