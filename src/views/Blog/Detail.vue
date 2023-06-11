<template>
  <Layout>
    <div class="main-container" v-loading="loading">
      <BlogDetail v-if="data" :blog="data" />
      <BlogComment v-if="!loading"/>
    </div>
    <template #right>
      <BlogToc v-if="data" :list="data.toc" />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail'
import BlogComment from './components/BlogComment'
import BlogToc from './components/BlogToc'
import fetchData from '@/mixins/fetchData'
import { getBlog } from '@/api/blog'
export default {
  name: 'Detail',
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogComment,
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
.main-container
  box-sizing border-box
  width 100%
  height 100%
  padding 1em
  overflow-x hidden
  overflow-y auto
  scroll-behavior smooth
</style>