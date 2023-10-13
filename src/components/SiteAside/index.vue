<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :src="data.avatar" :size="150" />
      <h2 class="title">{{data.siteTitle}}</h2>
      <Menu />
      <Contact :data="data"/>
    </template>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Contact from './Contact'
import Menu from './Menu'
import { mapState } from 'vuex'
export default {
  name: 'SiteAside',
  components: {
    Avatar,
    Contact,
    Menu
  },
  computed: {
    ...mapState('setting', ['data'])
  }
}
</script>

<style lang="stylus" scoped>
.site-aside-container
  box-sizing border-box
  width 100%
  height 100%
  padding-top: 1em
  background-color #000
  overflow-x hidden
  overflow-y auto
  .avatar-container
    margin 0 auto
  .title
    margin 1em auto
    font-size 1.2em
    color #fff
    text-align center
</style>