// 公共的远程获取数据的代码
// 使用的组价需要提供一个远程获取数据的方法 fetchData
export default function (defaultValue = null) {
  return {
    data () {
      return {
        data: defaultValue,
        loading: false
      }
    },
    async created () {
      try {
        this.loading = true
        this.data = await this.fetchData()
      } catch (err) {
        console.warn(err)
      } finally {
        this.loading = false
      }
    },
  }
}