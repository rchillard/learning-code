// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("/home/ryan/code/learning-code/gatsby/hello-world/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("/home/ryan/code/learning-code/gatsby/hello-world/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/home/ryan/code/learning-code/gatsby/hello-world/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/home/ryan/code/learning-code/gatsby/hello-world/.cache/data.json")

