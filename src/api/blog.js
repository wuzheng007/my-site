import request from './request'

/**
 * 获取所有博客分类
 */
export const getBlogTypes = () => {
  return request.get('/api/blogtype')
}

/**
 * 分页获取博客
 */
export const getBlogs = (params) => {
  return request.get('/api/blog', { params })
}

/**
 * 获取单个博客
 */
export const getBlog = (id) => {
  return request.get(`/api/blog/${id}`)
}

/**
 * 提交评论
 */
export const postComment = (data) => {
  return request.post('/api/comment', data)
}

/**
 * 获取评论
 */
export const getComments = (params) => {
  return request.get('/api/comment', { params })
}