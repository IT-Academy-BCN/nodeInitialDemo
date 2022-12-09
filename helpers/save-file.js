const fs = require('fs');

const saveDB = (data) => {
  fs.writeFileSync('./db/data.json');
};
