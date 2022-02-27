
function averagePercentage(listAverage) {
    let sumValues = 0;
    let percentage = 0;
    const values = listAverage.map(value => value.percentage)
    for (let i=0; i < values.length; i++) {
         sumValues = sumValues + values[i]     
    }
    percentage = (sumValues / values.length).toFixed(2);
    return JSON.parse(percentage);
};

module.exports = { "averagePercentage": averagePercentage }