<template>
  <div id="app">
    <!-- <h1>App组件</h1> -->
    <!-- <Icon type="home"/> -->
    <!-- <Pager :current="currentPage" :total="total" :visibleNumber="visibleNumber" @changePage="handleChangePage"/> -->
    <!-- <div class="empty-box">
      <Empty text="测试文案"/>
    </div> -->
    <!-- <div class="img-box">
      <ImageLoader :src="imgSrc" :placeholder="placeholderSrc" :duration="3000" @load="handleLoad"/>
    </div> -->
    <!-- <div class="contact-box">
      <Contact />
    </div> -->
    <div class="menu-box">
      <Menu />
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Pager from '@/components/Pager'
import Empty from '@/components/Empty'
import ImageLoader from '@/components/ImageLoader'
import Contact from '@/components/Contact'
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    Icon,
    Pager,
    Empty,
    ImageLoader,
    Contact,
    Menu
  },
  data () {
    return {
      currentPage: 3,
      total: 112,
      visibleNumber: 10,
      // placeholderSrc: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100',
      placeholderSrc: 'https://img0.baidu.com/it/u=638700476,1418659625&fm=253&fmt=auto&app=138&f=JPEG?w=767&h=500',
      // imgSrc: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304'
      imgSrc: 'https://img2.baidu.com/it/u=3793294202,3554607989&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
    }
  },
  methods: {
    /**
     * @Date 2023-05-14 21:08:52
     * @introduction 页码变化回调
     * @description 详细描述
     * @param {参数类型} e 页码数
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
    handleChangePage (e) {
      this.currentPage = e
    },
    handleLoad() {
      console.log('图片加载完成')
    }
  }
}
</script>

<style lang="stylus">
.empty-box
  width 600px
  height 300px
  border 1px solid #aaa
.img-box
  width 500px
  height 300px
  margin 20px auto
.contact-box
  width 300px
  height 600px
  background-color #000
  display flex
  flex-direction column
  justify-content center
.menu-box
  width 300px
  height 600px
  background-color #000
</style>
