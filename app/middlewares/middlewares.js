const checkMimeType = require("./check-mime-type");
const isUpload = require("./has-file");
const mediaError = require("./media-error-handler");
const cacheControl = require("./cache-control");
const getCurrentTime = require("./get-current-time");
const basicAuth = require("./basic-auth");
const authErrorHandler = require("./auth-error-handler");

module.exports = {
  checkMimeType,
  isUpload,
  mediaError,
  cacheControl,
  getCurrentTime,
  basicAuth,
  authErrorHandler,
};
