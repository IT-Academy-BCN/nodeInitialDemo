const fs = require('fs/promises');

async function changeUrl (fullUrl) {
 try {
    const userInfo = await require('../user.json')
    userInfo.URL = fullUrl.toString()
    
    fs.writeFile("./user.json", JSON.stringify(userInfo), 'utf-8')
 } catch (err) { console.log(err)}
}

module.exports = changeUrl