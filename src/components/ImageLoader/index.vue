<template>
  <div class="image-loader-container">
    <img v-if="!animationComplete" class="placeholder-img img" :src="placeholder" alt="">
    <img class="origin-img img" :style="{opacity: loadend ? 1 : 0, transition: `${duration}ms`}" :src="src" alt="" @load="handleLoad">
  </div>
</template>

<script>
export default {
  name: 'ImageLoader',
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      loadend: false, // 原图是否加载完
      animationComplete: false,
    }
  },
  methods: {
    handleLoad () {
      this.loadend = true
      this.$emit('load')
      setTimeout(() => {
        this.animationComplete = true
      },this.duration)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixin.styl'
.image-loader-container
  width 100%
  height 100%
  position relative
  overflow hidden
  .img
    self-fill()
    object-fit cover
    &.origin-img
      opacity 0
      z-index 1
    &.placeholder-img
      filter blur(1vw)
</style>