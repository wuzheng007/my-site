import { getSetting } from '@/api/setting'
import { titleControl } from '@/utils'
// 全局设置模块
export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
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
    /**
     * @introduction 获取全局设置
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     */
    async fetchSetting ({ commit }) {
      commit('setLoading', true)
      try {
        const res = await getSetting()
        commit('setData', res)
        if (res.favicon) {
          // <link rel="shortcut icon" type="images/x-icon" href="http://www.jd.com/favicon.ico"></link>
          // 设置网站页签图标
          let link = document.querySelector('link[rel="shortcut icon"]')
          if (link) {
            return
          }
          link = document.createElement('link')
          console.log('link', link)
          link.rel = 'shortcut icon'
          link.type = 'images/x-icon'
          link.href = res.favicon
          document.head.appendChild(link)
        }
        if (res.siteTitle) {
          titleControl.setSiteTitle(res.siteTitle)
        }
      } catch (err) {
        console.warn(err)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}