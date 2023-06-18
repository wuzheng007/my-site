/* 
图片懒加载 
*/
import defaultImg from '@/assets/default.gif'
export default {
  // 指令绑定元素插入父节点调用
  inserted (el, binding) {
    const src = binding.value
    // 将图片的src设置为默认的图片
    el.src = defaultImg
    const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
      // intersectionRatio大于0，说明被监听的元素在视野内
      if (intersectionRatio > 0) {
        el.src = src
        // 元素的src已经被赋值为真实地址，不需要监听了
        observer.unobserve(el)
      }
    })
    // 开始监听
    observer.observe(el)
  }
}