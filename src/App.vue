<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'
import ToTop from '@/components/ToTop'
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    ToTop
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
</style>
