switch (process.env.STORAGE_TYPE) {
    case "JSON": module.exports = require('./impl/Task_Json'); break;
    case "MYSQL": module.exports = require('./impl/Task_MySQL'); break;
    case "MONGODB": module.exports = require('./impl/Task_MongoDB'); break;
}
