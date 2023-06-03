<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <div class="main">
          <router-view></router-view>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixin.styl'
@import '~@/styles/var.styl'
.app-container
  self-fill(fixed)
  .left
    width 300px
    height 100%
  .main
    background-color $dark
</style>
