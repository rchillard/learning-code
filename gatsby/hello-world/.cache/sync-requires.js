// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("/home/ryan/code/learning-code/gatsby/hello-world/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/ryan/code/learning-code/gatsby/hello-world/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/ryan/code/learning-code/gatsby/hello-world/src/pages/index.js"))
}

