<template>
  <div class="blog-comment-container">
    <MessageArea @submit="handleSubmit" title="评论列表" :subTitle="subTitle" :list="data.rows" />
    <p class="tip" v-loading="loading">{{hasMore ? '' : '没有更多了'}}</p>
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import { getComments, postComment } from '@/api/blog'
export default {
  name: 'BlogComment',
  mixins: [fetchData({})],
  components: {
    MessageArea
  },
  data () {
    return {
      page: 1,
      limit: 10,
    }
  },
  computed: {
    subTitle () {
      const resut = this.data?.total
      return resut ? `(${this.data?.total})` : ''
    },
    // 是否还有更多
    hasMore () {
      return this.data.rows?.length < this.data.total
    }
  },
  created () {
    this.$bus.$on('mainScroll', this.handleMainScroll)
    this.$on('hook:beforeDestroy', () => {
      this.$bus.$off('mainScroll', this.handleMainScroll)
    })
  },
  methods: {
    fetchData () {
      const params = {
        page: this.page,
        limit: this.limit,
        blogid: this.$route.params.id
      }
      return getComments(params)
    },
    /**
     * @Date 2023-06-11 16:20:51
     * @introduction 处理提交评论
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    async handleSubmit (data, callback) {
      const params = {
        nickname: data.nickname,
        content: data.content,
        blogId: this.$route.params.id
      }
      try {
        const res = await postComment(params)
        if (res) {
          this.data.rows.unshift(res)
          this.data.total++
          this.$showMessage({
            content: '评论成功',
            type: 'success'
          })
        }
        callback && callback(res ? true : false)
      } catch (err) {
        callback && callback(false)
        console.warn(err)
      }
    },
    async handleMainScroll (dom) {
      // 当容器的内容总高度 - 顶部被卷入的高度 - 元素的可见区域高度大于200，说明容器距离滚动到底部还超过200px, 直接return
      if (dom.scrollHeight - dom.scrollTop - dom.clientHeight > 200 || this.loading || !this.hasMore) {
        return
      }
      this.page += 1
      this.loading = true
      try {
        const res = await this.fetchData()
        this.data.rows = this.data.rows.concat(res.rows)
      } catch (err) {
        console.warn(err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.tip
  height 50px
  line-height 50px
  text-align center
  color $lightWords
</style>