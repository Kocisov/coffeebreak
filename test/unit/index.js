/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
