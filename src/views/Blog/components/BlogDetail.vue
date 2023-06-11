<template>
  <div class="blog-detail-container">
    <h1 class="title">{{blog.title}}</h1>
    <div class="aside">
      <span>日期：{{formatDate(blog.createDate)}}</span>
      <span>浏览：{{blog.scanNumber}}</span>
      <a href="">评论：{{blog.commentNumber}}</a>
      <a href="">{{blog.category?.name}}</a>
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
.blog-detail-container
  box-sizing border-box
  width 100%
  height 100%
  padding 1em
  overflow-x hidden
  overflow-y auto
  scroll-behavior smooth
.aside
  margin-bottom 1.5em
  color $gray
  font-size 12px
  span, a
    margin-right 1.5em
</style>