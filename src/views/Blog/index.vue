<template>
  <Layout>
    <div ref="leftContainer" class="left-container" v-loading="loading">
      <BlogList :list="articleData.rows" />
      <Pager :current="routeInfo.page" :limit="routeInfo.limit" :total="articleData.total" @changePage="handleChangePage" />
    </div>
    <template #right>
      <div class="cate">
        <h2 class="title">分类列表</h2>
        <RightList v-loading="cateLoading" :list="formatCategoryList" @nodeClick="handleNodeClick" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogList from './components/BlogList'
import Pager from '@/components/Pager'
import RightList from './components/RightList'
import { getBlogTypes, getBlogs } from '@/api/blog'
export default {
  name: 'Blog',
  components: {
    Layout,
    BlogList,
    Pager,
    RightList,
  },
  data () {
    return {
      categoryList: [], // 分类列表
      articleData: {}, // 文章分页数据
      loading: false,
      cateLoading: false
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
    // 格式化后的分类列表
    formatCategoryList () {
      const list = [
        {
          id: -1,
          name: '全部',
          order: 0,
          articleCount: this.categoryList.reduce((a,b) => a + b.articleCount, 0)
        },
        ...this.categoryList
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
  watch: {
    $route (newVal) {
      this.getArticleData()
      // 滚动到容器顶部
      this.$refs.leftContainer.scrollTop = 0
    }
  },
  mounted () {
    this.getCategoryList()
    this.getArticleData()
  },
  methods: {
    // 获取分类数据
    async getCategoryList () {
      this.cateLoading = true
      try {
        this.categoryList = await getBlogTypes()
      } catch (err) {
        console.warn(err)
      } finally {
        this.cateLoading = false
      }
    },
    // 获取文章分页
    async getArticleData () {
      this.loading = true
      const params = {
        page: this.routeInfo.pahe,
        limit: this.routeInfo.limit,
        categoryId: this.routeInfo.categoryId
      }
      try {
        this.articleData = await getBlogs(params)
      } catch (err) {
        console.warn(err)
      } finally {
        this.loading = false
      }
    },
    handleNodeClick (node) {
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
.cate
  box-sizing border-box
  padding 1em
  width 300px
  height 100%
  overflow auto
  display flex
  flex-direction column
  .title
    margin 0 0 0.3em
  .right-list-container
    flex 1 1 auto
</style>