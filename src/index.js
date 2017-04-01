/**
 *
 * @module monad-reader
 */
;(function () {
  'use strict'

  /* imports */
  var compose = require('fun-compose')
  var K = require('fun-constant')
  var funMonad = require('fun-monad')
  var funAssert = require('fun-assert')

  var isFunction = funAssert.type('Function')

  /* exports */
  module.exports = funMonad({
    type: isFunction,
    of: K,
    map: compose,
    join: join
  })

  function join (mma) {
    return function (env) {
      return mma(env)(env)
    }
  }
})()

