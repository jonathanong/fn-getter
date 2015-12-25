'use strict'

module.exports = fn => {
  let value = null

  return () => {
    if (value != null) return value
    value = fn()
    return value
  }
}
