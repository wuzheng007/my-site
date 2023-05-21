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
  display flex
  height 100%
  .left,
  .right
    flex 0 0 auto
    height 100%
  .main
    flex 1 1 auto
    height 100%
</style>