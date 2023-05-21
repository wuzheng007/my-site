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
          <div>内容区</div>
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
  data () {
    
  },
  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixin.styl'
.app-container
  self-fill(fixed)
  .left
    width 300px
    height 100%
  .main
    background-color #ccc
</style>
