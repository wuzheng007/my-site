<template>
  <nav class="menu-container">
    <router-link class="menu-item" active-class="selected" :exact="item.name !== 'blog'" :to="{name: item.name}" v-for="(item, index) in menuList" :key="index">
      <div class="icon-box">
        <Icon :type="item.icon"/>
      </div>
      <span>{{item.title}}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Menu',
  components: {
    Icon
  },
  data() {
    return {
      menuList: [
        {
          name: 'home',
          title: '首页',
          icon: 'home'
        },
        {
          name: 'blog',
          title: '文章',
          icon: 'blog'
        },
        {
          name: 'about',
          title: '关于我',
          icon: 'about'
        },
        {
          name: 'project',
          title: '项目&效果',
          icon: 'code'
        },
        {
          name: 'message',
          title: '留言板',
          icon: 'chat'
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.menu-item
  display flex
  align-items center
  padding 10px 50px
  cursor pointer
  color $gray
  &:hover
    color #fff
  &.selected
    background-color #2d2d2d
  .icon-box
    margin-right 8px
</style>