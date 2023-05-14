<template>
  <div id="app">
    <!-- <h1>App组件</h1> -->
    <!-- <Icon type="home"/> -->
    <!-- <Pager :current="currentPage" :total="total" :visibleNumber="visibleNumber" @changePage="handleChangePage"/> -->
    <div class="empty-box">
      <Empty text="测试文案"/>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Pager from '@/components/Pager'
import Empty from '@/components/Empty'
export default {
  name: 'App',
  components: {
    Icon,
    Pager,
    Empty
  },
  data () {
    return {
      currentPage: 3,
      total: 112,
      visibleNumber: 10
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
    handleChangePage(e) {
      this.currentPage = e
    }
  }
}
</script>

<style lang="stylus">
.empty-box
  width 600px
  height 300px
  border 1px solid #aaa
</style>
