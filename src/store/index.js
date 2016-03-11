'use strict'
let lsz = {}

lsz.get = (name) => {
  return window.localStorage.getItem(name)
}

lsz.set = (name, value) => {
  window.localStorage.setItem(name, value)
}

module.exports = lsz
