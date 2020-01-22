// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/ryan/code/learning-code/gatsby/tutorial-part-two/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-css-modules-js": () => import("/home/ryan/code/learning-code/gatsby/tutorial-part-two/src/pages/about-css-modules.js" /* webpackChunkName: "component---src-pages-about-css-modules-js" */),
  "component---src-pages-index-js": () => import("/home/ryan/code/learning-code/gatsby/tutorial-part-two/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/home/ryan/code/learning-code/gatsby/tutorial-part-two/.cache/data.json")

