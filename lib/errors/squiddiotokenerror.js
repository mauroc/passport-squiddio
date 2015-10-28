/**
 * `SquiddioTokenError` error.
 *
 * SquiddioTokenError represents an error received from a Squiddio's token
 * endpoint.  Note that these responses don't conform to the OAuth 2.0
 * specification.
 *
 * References:
 *   - https://developers.Squiddio.com/docs/reference/api/errors/
 *
 * @constructor
 * @param {String} [message]
 * @param {String} [type]
 * @param {Number} [code]
 * @param {Number} [subcode]
 * @api public
 */
function SquiddioTokenError(message, type, code, subcode) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'SquiddioTokenError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
SquiddioTokenError.prototype.__proto__ = Error.prototype;


/**
 * Expose `SquiddioTokenError`.
 */
module.exports = SquiddioTokenError;
