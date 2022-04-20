# Reqlang

Set the language for NodeJS web servers.

### Install

```
npm i reqlang
```

### Usage

The language of the request is looked up in this order:

1. Params lang
2. From pathname: `/en/hello`
3. From the lang cookie
4. The default language
5. Fallback to English (`en`)

```js
const http = require('http')
const rekvest = require('rekvest')
const wcookie = require('wcookie')
const lang = require('reqlang')

// NodeJS web server
const server = http.createServer(function(req, res) {

  // Add pathname to request object
  rekvest(req)

  // Add cookie support
  wcookie(req)

  // Set the request language
  lang(req)

  // Set the request language, with default
  lang(req, 'en')

  req.lang // 'en'
})
```

ISC Licensed. Enjoy!
