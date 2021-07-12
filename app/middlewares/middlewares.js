const checkMimeType = require("./check-mime-type");
const hasFile = require("./has-file");
const mediaError = require("./media-error-handler");
const cacheControl = require("./cache-control");
const basicAuth = require("./basic-auth");
const authErrorHandler = require("./auth-error-handler");

module.exports = {
  checkMimeType,
  hasFile,
  mediaError,
  cacheControl,
  basicAuth,
  authErrorHandler,
};
