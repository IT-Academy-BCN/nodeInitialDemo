
function calculatePercentage(wins, throws) {
    let percentage = (wins * 100 / throws).toFixed(2) ;
    return JSON.parse(percentage);
};

module.exports = {"calculatePercentage": calculatePercentage};