/**
 *
 * @module monad-reader
 */
;(function () {
  'use strict'

  /* exports */
  module.exports = Reader
  module.exports.run = runReader

  /**
   *
   * @function module:monad-reader.Reader
   *
   * @param {*} f - e -> a
   *
   * @return {Reader} a new instance of Reader
   */
  function Reader (f) {
    if (!this) {
      return new Reader(f)
    }

    this.value = f
  }

  function runReader (reader, env) {
    return reader.value(env)
  }

  Reader.prototype.run = function run (env) {
    return runReader(this, env)
  }
})()

