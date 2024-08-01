var assert = require('assert')
var lang = require('../../index.js')

var it = {},
  x = {}

it['should set default lang'] = async function () {
  var req = {
    pathname: '/hello',
    cookie: () => {}
  }
  lang(req)
  assert.deepEqual(req.lang, 'en')
  lang(req, 'no')
  assert.deepEqual(req.lang, 'no')
}

it['should set lang from params'] = async function () {
  var req = {
    pathname: '/hello',
    cookie: () => {},
    params: {
      lang: 'se'
    }
  }
  lang(req)
  assert.deepEqual(req.lang, 'se')
}

it['should set lang from cookie'] = async function () {
  var req = {
    pathname: '/hello',
    cookie: () => {
      return 'fi'
    }
  }
  lang(req)
  assert.deepEqual(req.lang, 'fi')
}

it['should set lang from path'] = async function () {
  var req = {
    pathname: '/es/hello',
    cookie: () => {}
  }
  lang(req)
  assert.deepEqual(req.lang, 'es')
}

module.exports = it
