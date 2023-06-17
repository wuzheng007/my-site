import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/gloab.styl'
import { showMessage } from '@/utils/index'
import './eventBus'
// 导入mock
import './mock'
import vLoading from '@/directives/loading'
// 将展示消息的方法挂载在vue的原型上
Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false
// 注册全局指令v-loading
Vue.directive('loading', vLoading)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
