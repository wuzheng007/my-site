<template>
  <div class="blog-categroy-container">
    <h2 class="title">分类列表</h2>
    <RightList v-loading="loading" :list="categoryList" @nodeClick="handleNodeClick" />
  </div>
</template>

<script>
import RightList from './RightList'
import fetchData from '@/mixins/fetchData'
import { getBlogTypes } from '@/api/blog'
export default {
  name: 'BlogCategory',
  mixins: [fetchData([])],
  components: {
    RightList
  },
  computed: {
    routeInfo () {
      const categoryId = this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10
      return {
        categoryId,
        page,
        limit
      }
    },
    // 格式化后的数据
    categoryList () {
      const list = [
        {
          id: -1,
          name: '全部',
          order: 0,
          articleCount: this.data.reduce((a, b) => a + b.articleCount, 0)
        },
        ...this.data
      ]
      return list.map(item => {
        return {
          ...item,
          isSelected: item.id === this.routeInfo.categoryId,
          articleCount: item.articleCount
        }
      })
    }
  },
  methods: {
    fetchData () {
      return getBlogTypes()
    },
    handleNodeClick (node) {
      if (node.id === this.routeInfo.categoryId) return false
      const query = {
        page: this.routeInfo.page,
        limit: this.routeInfo.limit
      }
      const params = {
        categoryId: node.id
      }
      if (node.id === -1) {
        this.$router.push({
          name: 'blog',
          query
        })
      } else {
        this.$router.push({
          name: 'categoryBlog',
          query,
          params
        })
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.blog-categroy-container
  box-sizing border-box
  width 300px
  height 100%
  padding-left 1em 
  overflow auto
  .title
    margin 0 0 0.3em
</style>