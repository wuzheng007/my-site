/**
 * @Date 2023-06-04 21:52:19
 * @introduction 将时间戳格式化为2023-04-06或2023-04-06 12:10:30 类型的字符串
 * @description 详细描述
 * @param {Number} timestramp 时间戳
 * @param {Boolean} time 是否转为年-月-日 时:分:秒的字符串，默认值转为年-月-日
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export default function (timestramp, time = false) {
  if (!timestramp) return ''
  const date = new Date(+timestramp)
  const year = date.getFullYear()
  // 将0-9进行补零
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')
  if (time) {
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  } else {
    return `${year}-${month}-${day}`
  }
}