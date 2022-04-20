// Get language from path
function getLang(path) {
  const match = path.match(/^\/([a-z]{2})\//)
  if (match) return match[1]
}

// Set up language
module.exports = function(req, defaultLang = 'en') {
  const cookieLang = req.cookie('lang')
  const lang = req.params?.lang
    || getLang(req.pathname)
    || cookieLang
    || defaultLang

  // Update lang cookie
  if (cookieLang) {
    if (cookieLang != lang) {
      req.cookie('lang', lang)

    } else if(cookieLang == defaultLang) {
      req.cookie('lang', null)
    }
  }
  req.lang = lang
}
