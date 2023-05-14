<template>
  <div class="empty-container">
    <Icon type="empty"/>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Empty',
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.empty-container
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  color $gray
  .icon-container
    font-size 50px
</style>