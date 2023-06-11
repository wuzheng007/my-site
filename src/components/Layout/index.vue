<template>
  <div class="layout-container">
    <!-- 左边 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- 中间 -->
    <div class="main">
      <slot></slot>
    </div>
    <!-- 右边 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="stylus" scoped>
.layout-container
  height 100%
  width 100%
  display flex
  .left, .right
    flex 0 0 auto
    overflow hidden
  .main
    flex 1 1 auto
    overflow hidden
</style>