import Mock from 'mockjs'
// （博客所有分类） 拦截规则：请求地址：/api/blogtype,请求方法：get 
Mock.mock('/api/blogtype', 'get', {
  code: 0,
  msg: '',
  // 属性 data 是一个数组，含有10-20个元素
  'data|10-30': [
    {
      'id|+1': 1, // id每次自增1，起始值为1
      name: '分类@id',
      'articleCount|0-300': 0, // 该分类下文章的数量0-300
      'order|+1': 1
    }
  ]
})
// 分页获取博客
// 匹配以 /api/blog 开头，后面可以跟零个或多个query参数
Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', (options) => {
  const params = new URLSearchParams(options.url.split('?')[1])
  const page = params.get('page')
  const limit = params.get('limit')
  const categoryId = params.get('categoryId')
  const template = {
    code: 0,
    msg: '',
    data: {
      'total|500-1000': 500, // total在500-1000之间
      [`rows|${limit}`]: [
        {
          id: '@id', // 随机一个id
          title: '@ctitle(8,50)',  // 随机生成一句中文标题
          description: '@cparagraph(5)',   // 随机生成一段中文文本,最少5段
          category: {
            'id|1-10': 0,
            name: "分类@id"
          },
          'scanNumber|0-3000': 0,
          'commentNumber|0-300': 0,
          thumb: Mock.Random.image('300x250', '#00405d', '#FFF', 'Mock.js'), // 随机图片
          createDate: '@date("T")' // 随机一个时间戳
        }
      ]
    }
  }
  return Mock.mock(template)
})