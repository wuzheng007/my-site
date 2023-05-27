import Vue from "vue";

/**
 * @Date 2023-05-21 22:01:41
 * @introduction 获取某个组件渲染的根Dom
 * @description 详细描述
 * @param {参数类型} 参数 参数说明
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export default function (comp, props) {
  const vm = new Vue({
    render: h => h(comp, { props })
  })
  vm.$mount()
  return vm.$el
}