
// Create Function Format Date
const formatDate = dateInput => dateInput.substring(0, 10) + " " + dateInput.substr(11, 8);

module.exports = formatDate;