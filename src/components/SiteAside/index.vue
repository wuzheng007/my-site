<template>
  <div class="site-aside-container">
    <Avatar src="https://img2.baidu.com/it/u=1612835289,3257047895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" :size="150" />
    <h2 class="title">{{title}}</h2>
    <Contact />
    <Menu />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Contact from './Contact'
import Menu from './Menu'
export default {
  name: 'SiteAside',
  components: {
    Avatar,
    Contact,
    Menu
  },
  data() {
    return {
      title: '吴政的空间'
    }
  }
}
</script>

<style lang="stylus" scoped>
.site-aside-container
  box-sizing border-box
  width 100%
  height 100%
  padding: 20px 0
  background-color #000
  overflow-x hidden
  overflow-y auto
  .avatar-container
    margin 0 auto 20px
  .title
    margin 0
    font-size 1.2em
    color #fff
    text-align center
</style>