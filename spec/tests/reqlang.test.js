const assert = require('assert')
const lang = require('../../index.js')

const it = {}, x = {}

it['should set default lang'] = async function() {
  const req = {
    pathname: '/hello',
    cookie: () => {}
  }
  lang(req)
  assert.deepEqual(req.lang, 'en')
  lang(req, 'no')
  assert.deepEqual(req.lang, 'no')
}

it['should set lang from params'] = async function() {
  const req = {
    pathname: '/hello',
    cookie: () => {},
    params: {
      lang: 'se'
    }
  }
  lang(req)
  assert.deepEqual(req.lang, 'se')
}

it['should set lang from cookie'] = async function() {
  const req = {
    pathname: '/hello',
    cookie: () => {
      return 'fi'
    }
  }
  lang(req)
  assert.deepEqual(req.lang, 'fi')
}

it['should set lang from path'] = async function() {
  const req = {
    pathname: '/es/hello',
    cookie: () => {}
  }
  lang(req)
  assert.deepEqual(req.lang, 'es')
}

module.exports = it
