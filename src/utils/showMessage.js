import getComponentRootDom from "./getComponentRootDom"
import Icon from '@/components/Icon'
import styles from './showMessage.module.styl'

/**
 * @typedef {Object} Options
 * @property {String} content 消息内容
 * @property {String} type 消息类型，默认值： 'info', 可选值：'info', 'error', 'warn', 'success'
 * @property {Number} duration 消息显示时长, 默认值：1500
 * @property {HTMLElement} container 消息所在的容器，会显示在容器中心，默认容器是body元素
 * @property {Function} callback 消息消失后执行的回调函数
 */

/**
 * @Date 2023-05-27 16:46:15
 * @introduction 弹出消息
 * @description 调用此方法后，弹出提示消息
 * @param {Options} options 配置对象 默认值：{content: '', type: 'info', duration: 1500, }
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export default function showMessage (options = {}) {
  let { content, type = 'info', duration = 1500, container, callback } = options
  const div = document.createElement('div')
  // 获取Icon组件的Dom
  const iconDom = getComponentRootDom(Icon, { type })
  div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><span class=${styles.text}>${content}</span>`
  div.classList.add(styles.message, styles[type])
  if (container) {
    // 判断容器的postinion是否为默认的static，需要改为相对定位
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative'
    }
  } else {
    container = document.body
  }
  container.appendChild(div)
  // 此类名必须要异步添加，渐显动画才会执行
  requestAnimationFrame(() => {
    div.classList.add(styles.fadein)
  })
  // 根据配置的消息显示时长，让消息消失
  setTimeout(() => {
    // 添加渐隐的类名,
    div.classList.add(styles.fadeout)
    // 监听过渡效果结束
    div.addEventListener('transitionend', () => {
      // 移除元素
      div.remove()
      // 运行配置的回调函数
      callback && callback()
    }, { once: true })
  }, duration)
}