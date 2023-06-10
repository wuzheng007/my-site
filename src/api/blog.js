import request from './request'

/**
 * 获取所有博客分类
 */
export const getBlogTypes = () => {
  return request('/api/blogtype')
}

/**
 * 分页获取博客
 */
export const getBlogs = (data) => {
  return request('/api/blog', { params: data })
}