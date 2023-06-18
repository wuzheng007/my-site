/* 
在容器正中间插入一个loading效果的图片，实现一个加载效果 
*/

import loadingImgUrl from '@/assets/loading.svg'
import styles from './style.module.styl'
// 创建loading图片元素
const createLoadingImg = () => {
  const img = document.createElement('img')
  img.dataset.role = 'loading'
  img.src = loadingImgUrl
  img.classList.add(styles.loading)
  return img
}

// v-loading执行的函数，bind和update钩子运行时，执行的逻辑相同，可以直接写成一个函数
export default function (el, binding) {
  // 查找当前绑定指令的dom元素内是否存在loading图片元素
  const loadingImg = el.querySelector('img[data-role=loading]')
  // loading指令的绑定值为true，并且绑定指令的元素内部没有loading图片元素,就创建laoding图片插入该元素
  if (binding.value && !loadingImg) {
    // 当绑定指令的元素的position是默认值时，添加一个类名，样式是position: relative
    if (getComputedStyle(el).position === 'static' || !getComputedStyle(el).position) {
      el.classList.add(styles.parent)
    }
    el.append(createLoadingImg())
  }
  // loading指令绑定的值为false时，如果绑定指定的元素内部有loading图片元素就移除它,同时移除给父元素添加的的类名
  if (!binding.value) {
    loadingImg && loadingImg.remove()
    el.classList.remove(styles.parent)
  }
}