// 首页banner模块(因为首页banner是静态数据，不会变动，所以也可放入store，减少请求)
import { getBanners } from '@/api/banner'
export default {
  namespaced: true,
  state: {
    loading: false,
    data: []
  },
  mutations: {
    setData (state, payload) {
      state.data = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async fetchData ({ state, commit }) {
      if (state.data.length > 0) return
      commit('setLoading', true)
      try {
        const res = await getBanners()
        commit('setData', res)
      } catch (err) {
        console.warn(err)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}