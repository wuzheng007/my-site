/**
 * @Date 2023-06-17 16:26:21
 * @introduction 函数防抖
 * @description 详细描述
 * @param {Function} fn 需要防抖的函数
 * @param {Number} duration 需要延迟的毫秒数， 默认100毫秒
 * @return {返回类型说明}
 */
export default function (fn, duration = 100) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, duration)
  }
}