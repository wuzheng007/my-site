<template>
  <div class="blog-toc-container">
    <h2 class="title">目录</h2>
    <RightList :list="list" @nodeClick="handleNodeClick" />
  </div>
</template>

<script>
import RightList from './RightList'
export default {
  name: 'BlogToc',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    RightList
  },
  methods: {
    handleNodeClick (node) {
      // 改变路径的哈希值,文章详情会跳转到相应的地方，因为对应的元素设置了对应的哈希值
      location.hash = node.anchor
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-toc-container
  box-sizing border-box
  width 300px
  padding-left 20px
  overflow-y auto
  overflow-x hidden
  .title
    font-size 1em
</style>