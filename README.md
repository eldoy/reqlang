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
var http = require('http')
var rekvest = require('rekvest')
var wcookie = require('wcookie')
var lang = require('reqlang')

// NodeJS web server
var server = http.createServer(function(req, res) {

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

Created by [Eldøy Projects](https://eldoy.com)
