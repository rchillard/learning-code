// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/ryan/code/learning-code/gatsby/tutorial-part-two/.cache/dev-404-page.js")),
  "component---src-pages-about-css-modules-js": preferDefault(require("/home/ryan/code/learning-code/gatsby/tutorial-part-two/src/pages/about-css-modules.js")),
  "component---src-pages-index-js": preferDefault(require("/home/ryan/code/learning-code/gatsby/tutorial-part-two/src/pages/index.js"))
}

