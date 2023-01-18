const getPercentage = require('./win-percent.controller');

async function sortRanking() {
  const list = await getPercentage();
  list.sort((a, b) => b.winPercent - a.winPercent);
  return list;
}

async function getRanking(req, res) {
  try {
    const sortedList = await sortRanking();
    res.status(200).json(sortedList);
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function getWinner(req, res) {
  try {
    const sortedList = await sortRanking();
    const winner = sortedList[0];
    res.status(200).json(winner);
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function getLoser(req, res) {
  try {
    const sortedList = await sortRanking();
    const loser = sortedList.at(-1);
    res.status(200).json(loser);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
module.exports = { getRanking, getWinner, getLoser };
