<template>
  <ul class="blog-list-container">
    <li class="article-item" v-for="item in list" :key="item.id">
      <div class="thumb">
        <a href="">
          <img :src="item.thumb" :alt="item.title" :title="item.title">
        </a>
      </div>
      <div class="body">
        <a href="">
          <h2 class="title">{{item.title}}</h2>
        </a>
        <div class="aside">
          <span class="date">日期：{{formatDate(item.createDate)}}</span>
          <span class="scan">浏览：{{item.scanNumber}}</span>
          <span class="comment">评论：{{item.commentNumber}}</span>
          <span>{{item.category.name}}</span>
        </div>
        <p class="desc">{{item.description}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { formatDate } from '@/utils'
export default {
  name: 'BlogList',
  props: {
    list: {
      type: Array,
      defauly () {
        return []
      }
    }
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.blog-list-container
  padding 0
  .article-item
    display flex
    padding 1em 0
    border-bottom 1px solid $gray
    .thumb
      flex 0 0 auto
      margin-right 1em
      img
        display block
        max-width 200px
        border-radius 5px
        object-fit cover
    .body
      .title
        margin 0 0 0.5em
      .aside
        margin-bottom 1em
        font-size 12px
        color $lightWords
        span
          margin-right 1.5em
      .desc
        font-size 14px
</style>