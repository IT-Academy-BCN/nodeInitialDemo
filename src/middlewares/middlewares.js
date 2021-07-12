const checkMimeType = require("./check-mime-type");
const isUpload = require("./has-file");
const mediaError = require("./media-error-handler");
const cacheControl = require("./cache-control");
const basicAuth = require("./basic-auth");
const authErrorHandler = require("./auth-error-handler");

module.exports = {
  checkMimeType,
  isUpload,
  mediaError,
  cacheControl,
  basicAuth,
  authErrorHandler,
};
