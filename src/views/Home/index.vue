<template>
  <div class="home-container" ref="container" v-loading="loading" @wheel="handleWheel">
    <!-- 内容 -->
    <ul class="carousel-container" :style="{marginTop: marginTop+'px'}" @transitionend="handleTransitionend">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>
    <!-- 上箭头 -->
    <div class="arrow arrow-up" v-show="index>0" @click="index--">
      <Icon type="arrowUp"/>
    </div>
    <!-- 下箭头 -->
    <div class="arrow arrow-down" v-show="index<banners.length-1" @click="index++">
      <Icon type="arrowDown" />
    </div>
    <!-- 指示器 -->
    <ul class="indicator">
      <li class="dot" v-for="(item, i) in banners" :key="item.id" :class="{active: i === index}" @click="index=i"></li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import CarouselItem from './CarouselItem.vue'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    Icon,
    CarouselItem
  },
  data () {
    return {
      index: 0, // 当前轮播的索引
      containerHeight: 0, // 容器高度
      switching: false, // 轮播是否正在切换中
    }
  },
  computed: {
    ...mapState({
      banners: state => state.banner.data,
      loading: state => state.banner.loading,
    }),
    marginTop() {
      return -this.containerHeight*this.index
    }
  },
  created () {
    this.fetchData()
  },
  mounted () {
    // 获取容器的高度
    this.containerHeight = this.$refs.container.clientHeight
    // 监听浏览器窗口大小改变
    window.addEventListener('resize', this.handleResize)
    /* 组件的生命周期beforeDestroy执行时，会触发hook:beforeDestroy事件，执行移除resize事件
    事实上，vue所有的生命周期钩子执行时，都会触发一个hook:XXX事件 */
    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.handleResize)
    })
  },
  methods: {
    ...mapActions('banner', ['fetchData']),
    /**
     * @Date 2023-06-03 16:22:50
     * @introduction 鼠标滚轮事件回调
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleWheel (e) {
      // 如果正在切换中, 直接return
      if(this.switching) return
      // 鼠标的垂直滚动量，向下滚动为正数，向上滚动为负数
      const deltaY = e.deltaY
      // 滚动量大于10且当前不是最后一项，才滚动到下一张
      if(deltaY > 10 && this.index < this.banners.length - 1) {
        this.switching = true
        this.index++
      }
      if(deltaY < -10 && this.index > 0) {
        this.switching = true
        this.index--
      }
    },
    /**
     * @Date 2023-06-03 17:29:04
     * @introduction 过渡结束回调
     * @description 当轮播margin-top过渡动画结束之后，将切换中的状态改为false
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleTransitionend () {
      this.switching = false
    },
    /**
     * @Date 2023-06-03 18:37:12
     * @introduction 浏览器窗口大小变化回调
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.home-container
  width 100%
  height 100%
  position relative
  overflow hidden
  .carousel-container
    height 100%
    padding 0
    transition .5s
    li
      width 100%
      height 100%
      margin 0
  // 箭头
  .arrow
    position absolute
    left 50%
    transform translateX(-50%)
    cursor pointer
    z-index 9
    $distance = 20px
    $jump-amplitude = 10px
    &:hover
      animation-play-state: paused;
    // 上箭头动画
    @keyframes jump-up
      0%
        transform translateY($jump-amplitude)
      50%
        transform translateY((-($jump-amplitude)))
      100%
        transform translateY($jump-amplitude)
    // 下箭头动画
    @keyframes jump-down
      0%
        transform translateY((-($jump-amplitude)))
      50%
        transform translateY($jump-amplitude)
      100%
        transform translateY((-($jump-amplitude)))
    .icon-container
      font-size 40px
      color $lightWords
      line-height 1
    &-up
      top $distance
      animation jump-up 2s infinite
    &-down
      bottom $distance
      animation jump-down 2s infinite
  // 指示器
  .indicator
    position absolute
    top 50%
    right 30px
    transform translateY(-50%)
    z-index 9
    .dot
      width 8px
      height 8px
      margin 10px 0
      border 2px solid #fff
      border-radius 50%
      background-color $lightWords
      cursor pointer
      &.active
        background-color #fff
</style>