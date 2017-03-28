/**
 *
 * @module monad-reader
 */
;(function () {
  'use strict'

  /* imports */
  var Reader = require('./Reader')
  var compose = require('fun-compose')
  var funMonad = require('fun-monad')

  /* exports */
  module.exports = funMonad({
    type: Reader,
    of: of,
    map: map,
    join: join
  })

  function of (value) {
    return Reader(function (e) {
      return value
    })
  }

  function join (mma) {
    return Reader(function (env) {
      return mma.run(env).run(env)
    })
  }

  function map (f, ma) {
    return Reader(compose(f, ma.value))
  }
})()

