<template>
  <div class="avatar-container">
    <img class="avatar-img" :src="src" :style="{ width: size+'px', height: size+'px' }" alt="该图片无法加载">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true // 指定src是必填的
    },
    size: {
      type: Number,
      default: 50
    }
  }
}
</script>

<style lang="stylus" scoped>
.avatar-img
  display block
  border-radius 50%
  object-fit cover
</style>