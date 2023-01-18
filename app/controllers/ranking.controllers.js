const getPercentage = require('./win-percent.controller');

async function getRanking(req, res) {
  try {
    const list = await getPercentage();
    list.sort((a, b) => b.winPercent - a.winPercent);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function getWinner(req, res) {
  try {
    const list = await getPercentage();
    list.sort((a, b) => b.winPercent - a.winPercent);
    const winner = list[0];
    res.status(200).json(winner);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function getLoser(req, res) {
  try {
    const list = await getPercentage();
    list.sort((a, b) => b.winPercent - a.winPercent);
    const loser = list.at(-1);
    res.status(200).json(loser);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
module.exports = { getRanking, getWinner, getLoser };
