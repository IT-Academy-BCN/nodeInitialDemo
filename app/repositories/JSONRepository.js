const fs = require('fs');

const archive = './db/data.sjon';

const saveDB = (data) => {
    fs.writeFileSync(archive, JSON.stringify(data));
};