<template>
  <Layout>
    <div ref="mainScroll" class="main-container" v-loading="loading" @scroll="handleScroll">
      <BlogDetail v-if="data" :blog="data" />
      <BlogComment v-if="!loading" />
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
import mainScroll from '@/mixins/mainScroll'
import { getBlog } from '@/api/blog'
export default {
  name: 'Detail',
  mixins: [fetchData(null), mainScroll('mainScroll')],
  components: {
    Layout,
    BlogDetail,
    BlogComment,
    BlogToc
  },
  computed: {
    blogId() {
      return this.$route.params.id
    }
  },
  methods: {
    fetchData() {
      return getBlog(this.blogId)
    }
  },
  updated() {
    // 当页面刷新之后，会回到顶部，所有在这里将哈希值处理一下，已经页面跳转到之前激活的锚链接处
    const hash = location.hash
    location.hash = ''
    this.$nextTick(() => {
      location.hash = hash
    })
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