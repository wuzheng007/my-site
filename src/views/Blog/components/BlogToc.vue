<template>
  <div class="blog-toc-container">
    <h2 class="title">目录</h2>
    <RightList :list="toWithSelect" @nodeClick="handleNodeClick" />
  </div>
</template>

<script>
import RightList from './RightList'
import { debounce } from '@/utils'
export default {
  name: 'BlogToc',
  components: {
    RightList
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeAnchor: '' // 激活的锚链接
    }
  },
  created() {
    const setActiveAnchorDebounce = debounce(this.setActiveAnchor)
    this.$bus.$on('mainScroll', setActiveAnchorDebounce)
    this.$on('hook:beforeDestroy', () => {
      this.$bus.$off('mainScroll', setActiveAnchorDebounce)
    })
  },
  computed: {
    /**
     * @Date 2023-06-17 14:44:14
     * @introduction 计算属性-根据传递的list和当前激活的锚链接，给每一项添加一个isSelected属性
     * @description 详细描述
     * @return {返回类型说明}
     */
    toWithSelect() {
      const getToc = (arr = []) => {
        return arr.map(item => {
          return {
            ...item,
            isSelected: item.anchor === this.activeAnchor,
            children: getToc(item.children)
          }
        })
      }
      return getToc(this.list)
    },
    /**
     * @Date 2023-06-17 15:08:50
     * @introduction 计算属性-根据list中的anchoe获取文章详情中对应的dom元素
     * @description 详细描述
     * @return {返回类型说明}
     */
    doms() {
      let doms = []
      const addDom = (list = []) => {
        list.forEach(item => {
          if (item.anchor) {
            doms.push(document.getElementById(item.anchor))
          }
          if (item.children && item.children.length > 0) {
            addDom(item.children)
          }
        })
      }
      addDom(this.list)
      return doms
    }
  },
  methods: {
    handleNodeClick(node) {
      this.activeAnchor = node.anchor
      // 改变路径的哈希值,文章详情会跳转到相应的地方，因为对应的元素设置了对应的哈希值
      location.hash = node.anchor
    },
    /**
     * @Date 2023-06-17 15:19:49
     * @introduction 设置当前激活的锚链接
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     */
    setActiveAnchor() {
      this.activeAnchor = ''
      // 定义一个范围，当元素离视口200px时，算该元素的锚链接激活
      const range = 100
      this.doms.forEach(item => {
        const top = item.getBoundingClientRect().top
        if (top >= 0) { // 元素在浏览器视口顶部下方
          if (top < range) {
            this.activeAnchor = item.id
          }
        } else { // 元素在浏览器视口顶部上方
          this.activeAnchor = item.id
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-toc-container
  box-sizing border-box
  width 300px
  height 100%
  padding-left 20px
  overflow-y auto
  overflow-x hidden
  .title
    font-size 1em
</style>