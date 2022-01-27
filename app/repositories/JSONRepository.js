const fs = require('fs');

const archive = './db/data.sjon';

// When the task service is done, integrate saveJsonDB() in app.js with the array where the tasks will be saved.
const saveJsonDB = (data) => {
    fs.writeFileSync(archive, JSON.stringify(data));
};

// The readJsonDB() function is used for persistence, with it we can read a .json file that we have from a previous session.
const readJsonDB = () => {

    // This conditional is used to check if the file exists. If it doesn't exist, we return null and if it exists, it would execute the info and data constants.
    if (!fs.existsSync(archive)){
        return null;
    }

    const info = fs.readFileSync(archive, {encoding: 'utf-8'});

    // I use JSON.parse() so that when reading it it returns an array and not a string.
    const data = JSON.parse(info);

    return data;
}

module.exports = {
    saveJsonDB,
    readJsonDB
};