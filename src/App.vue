<template>
  <div id="app">
    <div class="site-aside-box">
      <SiteAside />
    </div>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside'
export default {
  name: 'App',
  components: {
    SiteAside
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
</style>
