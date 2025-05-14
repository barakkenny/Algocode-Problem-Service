const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class based extends BaseError {
  constructor(propertyName, details) {
    super("bad request", StatusCodes.INTERNAL_SERVER_ERROR, `Invalid structure for ${propertyName}`, details);
  }
}