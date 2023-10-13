import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { titleControl } from '@/utils'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

// 全局后置路由守卫
router.afterEach((to) => {
  if(to.meta.title) {
    titleControl.setRouteTitle(to.meta.title)
  }
})
export default router