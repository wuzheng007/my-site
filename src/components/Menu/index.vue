<template>
  <nav class="menu-container">
    <a class="menu-item" :class="{selected: isSelected(item.link)}" :href="item.link" v-for="(item, index) in menuList" :key="index">
      <div class="icon-box">
        <Icon :type="item.icon"/>
      </div>
      <span>{{item.title}}</span>
    </a>
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
          link: '/',
          title: '首页',
          icon: 'home'
        },
        {
          link: '/blog',
          title: '文章',
          icon: 'blog'
        },
        {
          link: '/about',
          title: '关于我',
          icon: 'about'
        },
        {
          link: '/project',
          title: '项目&效果',
          icon: 'code'
        },
        {
          link: '/message',
          title: '留言板',
          icon: 'chat'
        },
      ]
    }
  },
  methods: {
    isSelected (link) {
      if(['/blog'].includes(link)) {
        return location.pathname.startsWith(link)
      }else {
        return location.pathname.toLowerCase() === link.toLowerCase()
      }
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