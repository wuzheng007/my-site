// 事件总线挂载到vue的原型上，在main.js引入此文件
import Vue from 'vue'
Vue.prototype.$bus = new Vue()

/* 
事件名：mainScroll
描述：主区域滚动，就会触发mainScroll事件
事件参数：主区域的dom元素

事件名：setMainScoll
描述：设置主区域的滚动高度
事件参数：滚动高度（scrollTop）

事件名：hideToTop
描述：隐藏ToTop组件
事件参数：无

*/
