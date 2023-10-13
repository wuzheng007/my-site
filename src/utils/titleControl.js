/* 网站标题控制 */

let routeTitle = ''
let siteTitle = ''

function setTitle () {
  let title = ''
  if (!routeTitle && !siteTitle) { // 路由标题和网站标题都不存在
    title = 'loading...'
  } else if (routeTitle && siteTitle) { // 路由标题和网站标题都存在
    title = `${routeTitle}-${siteTitle}`
  } else { // 路由标题和网站标题有一个存在
    title = routeTitle || siteTitle
  }
  document.title = title
}
export default {
  // 设置路由标题
  setRouteTitle (title) {
    routeTitle = title
    setTitle()
  },
  // 设置网站标题
  setSiteTitle (title) {
    siteTitle = title
    setTitle()
  }
}