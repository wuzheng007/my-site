<template>
  <div class="blog-comment-container">
    <MessageArea @submit="handleSubmit" title="评论列表" :subTitle="subTitle" :list="data.rows" />
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
    }
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
    }
  }
}
</script>

<style lang="stylus" scoped></style>