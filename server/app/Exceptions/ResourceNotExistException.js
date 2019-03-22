"use strict";

const { LogicalException } = require("@adonisjs/generic-exceptions");

class ResourceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
  handle(error, { response }) {
    return response.status(404).json({
      error: "The Resource Does Not Exist"
    });
  }
}

module.exports = ResourceNotExistException;
