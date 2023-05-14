<template>
  <div v-if="totalPage > 1" class="pager-container">
    <a :class="{ disabled: current===1 }" @click="changePage(1)">|&lt;&lt;</a>
    <a :class="{ disabled: current===1 }" @click="changePage(current-1)">&lt;&lt;</a>
    <a :class="{ active: item === current }" v-for="(item, index) in pageNumberList" :key="index" @click="changePage(item)">{{item}}</a>
    <a :class="{ disabled: current===totalPage }" @click="changePage(current+1)">&gt;&gt;</a>
    <a :class="{ disabled: current===totalPage }" @click="changePage(totalPage)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.limit)
    },
    maxPage () {
      let max = this.current + Math.floor(this.visibleNumber / 2)
      if(max < this.visibleNumber) {
        max = this.visibleNumber
      }
      if(max > this.totalPage) {
        max = this.totalPage
      }
      return max
    },
    minPage () {
      let min = this.maxPage - this.visibleNumber + 1
      if(min < 1) {
        min = 1
      }
      return min
    },
    pageNumberList () {
      let list = []
      for(let i = this.minPage; i <= this.maxPage; i++) {
        list.push(i)
      }
      return list
    }
  },
  methods: {
    changePage(pageNumber) {
      if(pageNumber === this.current || pageNumber > this.totalPage || pageNumber < 1){
        return
      }
      this.$emit('changePage', pageNumber)
    }
  }
}
</script>

<style lang="stylus" scoped>
// 引入样式的写法 ~@表示src目录
@import '~@/styles/var.styl'
.pager-container
  display flex
  justify-content center
  align-items center
  margin 20px 0
  a
    color $primary
    margin 0 6px
    cursor pointer
    &.disabled
      color $gray
      cursor not-allowed
    &.active
      color $dark
      font-weight 700
</style>