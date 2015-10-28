/**
 * `SquiddioAuthorizationError` error.
 *
 * SquiddioAuthorizationError represents an error in response to an
 * authorization request on Squiddio.  Note that these responses don't conform
 * to the OAuth 2.0 specification.
 *
 * References:
 *   - https://developers.Squiddio.com/docs/reference/api/errors/
 *
 * @constructor
 * @param {String} [message]
 * @param {Number} [code]
 * @api public
 */
function SquiddioAuthorizationError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'SquiddioAuthorizationError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
SquiddioAuthorizationError.prototype.__proto__ = Error.prototype;


/**
 * Expose `SquiddioAuthorizationError`.
 */
module.exports = SquiddioAuthorizationError;
