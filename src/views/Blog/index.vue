<template>
  <Layout>
    <div ref="leftContainer" class="left-container" v-loading="loading">
      <BlogList :list="data.rows" />
      <Pager :current="routeInfo.page" :limit="routeInfo.limit" :total="data.total" @changePage="handleChangePage" />
    </div>
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogList from './components/BlogList'
import Pager from '@/components/Pager'
import BlogCategory from './components/BlogCategory'
import { getBlogs } from '@/api/blog'
import fetchData from '@/mixins/fetchData'
export default {
  name: 'Blog',
  mixins: [fetchData({})],
  components: {
    Layout,
    BlogList,
    Pager,
    BlogCategory,
  },
  data () {
    return {
    }
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
  },
  watch: {
    async $route () {
      // 滚动到容器顶部
      this.$refs.leftContainer.scrollTop = 0
      this.loading = true
      this.data = await this.fetchData()
      this.loading = false
    }
  },
  methods: {
    fetchData () {
      const params = {
        page: this.routeInfo.pahe,
        limit: this.routeInfo.limit,
        categoryId: this.routeInfo.categoryId
      }
      return getBlogs(params)
    },
    /**
     * @Date 2023-06-09 23:29:00
     * @introduction 页码变化回调
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleChangePage (page) {
      const query = {
        page,
        limit: this.routeInfo.limit
      }
      const params = {
        categoryId: this.routeInfo.categoryId
      }
      if (this.routeInfo.categoryId) {
        this.$router.push({
          name: 'categoryBlog',
          query,
          params
        })
      } else {
        // 没有分类id, 显示全部
        this.$router.push({
          name: 'blog',
          query
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.left-container
  box-sizing border-box
  height 100%
  padding 1em
  overflow auto
  scroll-behavior smooth // 平滑滚动
</style>