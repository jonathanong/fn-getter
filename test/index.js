'use strict'

/* eslint-env mocha */

const assert = require('assert')

const getter = require('..')

describe('Function Getter', () => {
  const getValue = getter(() => true)

  it('should retrieve the value the first time', () => {
    assert(getValue())
  })

  it('should retrieve the value the second time', () => {
    assert(getValue())
  })
})
