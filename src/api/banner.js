import request from './request'
export const getBanners = () => {
  return request.get('/api/banner')
}
getBanners().then(res => {
  console.log(res)
})