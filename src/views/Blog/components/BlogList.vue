<template>
  <ul class="blog-list-container">
    <li class="article-item" v-for="item in list" :key="item.id">
      <div class="thumb" v-if="item.thumb">
        <router-link :to="{
          name: 'blogDetail',
          params: {
            id: item.id
          }
        }">
          <img :src="item.thumb" :alt="item.title" :title="item.title">
        </router-link>
      </div>
      <div class="body">
        <router-link :to="{
          name: 'blogDetail',
          params: {
            id: item.id
          }
        }">
          <h2 class="title">{{item.title}}</h2>
        </router-link>
        <div class="aside">
          <span class="date">日期：{{formatDate(item.createDate)}}</span>
          <span class="scan">浏览：{{item.scanNumber}}</span>
          <span class="comment">评论12：{{item.commentNumber}}</span>
          <span>
            <router-link :to="{
              name: 'categoryBlog',
              params: {
                categoryId: item.category.id
              }
            }">
              {{item.category.name}}
            </router-link>
          </span>
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