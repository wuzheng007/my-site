<template>
  <div class="blog-detail-container">
    <h1 class="title">{{blog.title}}</h1>
    <div class="aside">
      <span>日期：{{formatDate(blog.createDate)}}</span>
      <span>浏览：{{blog.scanNumber}}</span>
      <a href="#data-form-container">评论：{{blog.commentNumber}}</a>
      <router-link :to="{
        name: 'categoryBlog',
        params: {
          categoryId: blog.category.id
        }
      }">{{blog.category?.name}}</router-link>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from '@/utils'
import "highlight.js/styles/github.css"
export default {
  name: 'BlogDetail',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/markdown.css'
@import '~@/styles/var.styl'
.aside
  margin-bottom 1.5em
  color $gray
  font-size 12px
  span, a
    margin-right 1.5em
.markdown-body
  margin-bottom 20px
</style>