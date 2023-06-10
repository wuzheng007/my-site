import request from './request'

/**
 * 获取标语
 */
export const getBanners = () => {
  return request.get('/api/banner')
}