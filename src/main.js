import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/gloab.styl'
import { showMessage } from '@/utils/index'
// 导入mock
import './mock'
// 将展示消息的方法挂载在vue的原型上
Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
