<template>
  <div class="detail-container" v-loading="loading">
    <Layout>
      <BlogDetail v-if="data" :blog="data" />
      <template #right>
        <BlogToc v-if="data" :list="data.toc"/>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail'
import BlogToc from './components/BlogToc'
import fetchData from '@/mixins/fetchData'
import { getBlog } from '@/api/blog'
export default {
  name: 'Detail',
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogToc
  },
  computed: {
    blogId () {
      return this.$route.params.id
    }
  },
  methods: {
    fetchData () {
      return getBlog(this.blogId)
    }
  }
}
</script>

<style lang="stylus" scoped>
.detail-container
  height 100%
</style>