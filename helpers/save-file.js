const fs = require('fs');

const saveDB = (data) => {
  fs.writeFileSync('./db/data.json', JSON.stringify(data));
};

const readDB = () => {
  const info = fs.readFileSync('./db/data.json', 'utf-8');
  const data = JSON.parse(info);
  return data;
};

module.exports = { saveDB, readDB };
