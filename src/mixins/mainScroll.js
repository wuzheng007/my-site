// 处理主区域滚动相关的问题，主区域需要绑定scroll事件，事件处理函数名为handleScroll
export default function (ref) {
  return {
    mounted () {
      this.$bus.$on('setMainScroll', this.handleSetMainScroll)
    },
    beforeDestroy () {
      // 触发隐藏ToTop组件的事件
      this.$bus.$emit('hideToTop')
      this.$bus.$off('setMainScroll', this.handleSetMainScroll)
    },
    methods: {
      handleScroll (event) {
        this.$bus.$emit('mainScroll', event.target)
      },
      handleSetMainScroll (scrollTop) {
        this.$refs[ref].scrollTop = scrollTop
      }
    }
  }
}