/**
 * @Date 2023-06-04 21:52:19
 * @introduction 将时间戳格式化为2023-04-06类型的字符串
 * @description 详细描述
 * @param {参数类型} 参数 参数说明
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export default function (timestramp) {
  const date = new Date(+timestramp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}