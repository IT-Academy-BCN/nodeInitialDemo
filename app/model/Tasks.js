switch (process.env.STORAGE_TYPE) {
    case "JSON": module.exports = require('./impl/Tasks_Json'); break;
    case "MYSQL": module.exports = require('./impl/Tasks_MySQL'); break;
    case "MONGODB": module.exports = require('./impl/Tasks_MongoDB'); break;
}
