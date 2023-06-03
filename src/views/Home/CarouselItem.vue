<template>
  <div class="carousel-item-container" ref="container" @mousemove="handleMousemove" @mouseleave="handleMouseleave">
    <div ref="imgBox" class="carousel-img-box" :style="imgBoxPosition">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="handleLoad" />
    </div>
    <h2 class="title" ref="title">{{carousel.title}}</h2>
    <p class="desc" ref="desc">{{carousel.description}}</p>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  name: 'CarouselItem',
  props: ['carousel'],
  components: {
    ImageLoader
  },
  data () {
    return {
      titleWidth: 0, // 标题文本宽度
      descWidth: 0, // 秒速文本宽度
      containerSize: {  // 容器信息，宽度高度，以及相对视口的位置
        width: 0,
        height: 0
      },
      imgBoxSize: { // 放置图片的盒子信息
        width: 0,
        height: 0
      },
      mousePosition: { // 鼠标相对容器的坐标
        x: 0,
        y: 0
      },
    }
  },
  computed: {
    // 图片位置
    imgBoxPosition () {
      if (!this.containerSize || !this.imgBoxSize) {
        return {}
      } else {
        // 放置图片的盒子比容器多出来的宽度
        const extraWidth = this.imgBoxSize.width - this.containerSize.width
        // 放置图片的盒子比容器多出来的高度
        const extraHeight = this.imgBoxSize.height - this.containerSize.height 
        // 鼠标相对容器的横坐标与容器的宽度的比值 = 图片盒子偏移量与多余宽度的比值
        const left = this.mousePosition.x / this.containerSize.width * extraWidth
        const top = this.mousePosition.y / this.containerSize.height * extraHeight
        return {
          left: -left + 'px',
          top: -top + 'px',
        }
      }
    },
    // 容器中心
    containerCenter() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  },
  mounted () {
    // 获取标题和描述文本内的宽度
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth
    // 将标题和文本宽度设为0, 文字就不会显示了 因为样式设置了overflow: hidden
    this.$refs.title.style.width = 0
    this.$refs.desc.style.width = 0
    this.$refs.title.style.transition = '1s'
    this.$refs.desc.style.transition = '1.5s 1s'
    this.setContainerSize()
    this.setImgBoxSize()
    // 设置鼠标位置默认为容器中心
    this.mousePosition.x = this.containerCenter.x
    this.mousePosition.y = this.containerCenter.y
  },
  methods: {
    /**
     * @Date 2023-06-03 19:08:58
     * @introduction 图片加载完成回调
     * @description 给标题和文本设置宽度，使之显示
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleLoad () {
      this.$refs.title.style.width = this.titleWidth + 'px'
      this.$refs.desc.style.width = this.descWidth + 'px'
    },
    /**
     * @Date 2023-06-03 21:47:30
     * @introduction 获取容器的信息
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    setContainerSize () {
      // 获取元素的大小和相对视口的位置， 进行解构
      const { width, height } = this.$refs.container.getBoundingClientRect()
      this.containerSize.width = width
      this.containerSize.height = height
    },
    /**
     * @Date 2023-06-03 22:23:58
     * @introduction 设置放置图片的盒子信息
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    setImgBoxSize () {
      const { width, height } = this.$refs.imgBox.getBoundingClientRect()
      this.imgBoxSize.width = width
      this.imgBoxSize.height = height
    },
    /**
     * @Date 2023-06-03 21:50:19
     * @introduction 鼠标移动回调
     * @description 计算出鼠标在容器内的相对位置
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleMousemove(e) {
      const { left, top } = this.$refs.container.getBoundingClientRect()
      const { clientX, clientY } = e
      this.mousePosition.x = clientX - left
      this.mousePosition.y = clientY - top
    },
    /**
     * @Date 2023-06-04 00:31:23
     * @introduction 鼠标移出容器回调
     * @description 将图片归位，设置鼠标位置为容器中心即可
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleMouseleave () {
      this.mousePosition.x = this.containerCenter.x
      this.mousePosition.y = this.containerCenter.y
    }
  }
}
</script>

<style lang="stylus" scoped>
.carousel-item-container
  position relative
  width 100%
  height 100%
  overflow hidden
  user-select none // 禁用用户选中
  .carousel-img-box
    position absolute
    width 110%
    height 110%
    transition .3s
  // 标题和描述样式
  .title, .desc
    position absolute
    left 50px
    top 100px
    z-index 9
    color #fff
    letter-spacing 0.2em
    white-space nowrap
    overflow hidden
    text-shadow 0.1px 0 0 rgba(0, 0, 0, 0.5), -0.1px 0 0 rgba(0, 0, 0, 0.5), 0 0.1px 0 rgba(0, 0, 0, 0.5), 0 -0.1px 0 rgba(0, 0, 0, 0.5)
  .title
    top calc(50% - 50px)
  .desc
    top 50%
</style>