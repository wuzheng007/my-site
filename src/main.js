import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/gloab.styl'
import { showMessage } from '@/utils/index'
import './eventBus'
// 导入mock
import './mock'
import vLoading from '@/directives/loading'
import vLazy from '@/directives/lazy'
// 将展示消息的方法挂载在vue的原型上
Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false
// 注册全局指令v-loading
Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy)

// 派发setting模块下的fetchSetting方法获取全局设置
store.dispatch('setting/fetchSetting')

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
