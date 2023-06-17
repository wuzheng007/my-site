<template>
  <ul class="right-list-container">
    <li v-for="item in list" :key="item.id">
      <p class="name" :class="{selected: item.isSelected}" @click="clickNode(item)">
        <span>{{item.name}}</span>
        <span v-if="item.articleCount" class="aside" :class="{selected: item.isSelected}">{{item.articleCount}}篇</span>
      </p>
      <!-- 组件递归 -->
      <RightList :list="item.children" @nodeClick="clickNode" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     * @Date 2023-06-04 17:26:12
     * @introduction 节点点击回调
     * @description 向外排除nodeClick时间，并传递当前节点的数据
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    clickNode (item) {
      this.$emit('nodeClick', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.right-list-container
  width 100%
  padding-left 0
  .right-list-container
    padding-left 1em
  .name
    line-height 2em
    color $words
    cursor pointer
    &.selected
      color $warn
    .aside
      margin-left 1em
      color $lightWords
      &.selected
        color $warn
</style>