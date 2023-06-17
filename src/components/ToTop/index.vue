<template>
  <div class="top-container" v-show="visible" @click="handleClick">Top</div>
</template>

<script>
export default {
  name: 'ToTop',
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    this.$bus.$on('mainScroll', this.handleMainScroll)
    this.$bus.$on('hideToTop', this.handleHideToTop)
  },
  beforeDestroy () {
    this.$bus.$off('mainScroll', this.handleMainScroll)
    this.$bus.$off('hideToTop', this.handleHideToTop)
  },
  methods: {
    handleMainScroll (mainDom) {
      // 滚动高度超过500px才显示
      if (mainDom.scrollTop > 500) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
    handleHideToTop () {
      this.visible = false
    },
    /**
     * @Date 2023-06-17 21:53:04
     * @introduction 点击ToTop回调
     * @description 触发事件setMainScroll，传入一个高度0，表示滚动到最顶部
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     */
    handleClick () {
      this.$bus.$emit('setMainScroll', 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.top-container
  position fixed
  right 50px
  bottom 50px
  width 50px
  height 50px
  border-radius 50%
  background-color $primary
  color #fff
  text-align center
  line-height 50px
  cursor pointer
</style>