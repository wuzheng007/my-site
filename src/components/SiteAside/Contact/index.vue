<template>
  <ul class="contact-container">
    <li>
      <a href="tencent://message/?Menu=yes&uin=1657955621&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon-box">
          <Icon type="qq" />
        </div>
        <span>{{data.qq}}</span>
      </a>
      <div class="popup">
        <img class="qrcode-img" :src="data.qqQrCode" alt="">
      </div>
    </li>
    <li>
      <a href="mailto:1657955621@qq.com">
        <div class="icon-box">
          <Icon type="mail" />
        </div>
        <span>{{data.mail}}</span>
      </a>
    </li>
    <li>
      <a :href="data.github">
        <div class="icon-box">
          <Icon type="github" />
        </div>
        <span>{{data.githubName}}</span>
      </a>
    </li>
    <li>
      <a>
        <div class="icon-box">
          <Icon type="weixin" />
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="popup">
        <img class="qrcode-img" :src="data.weixinQrCode" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Contact',
  components: {
    Icon
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.contact-container
  list-style none
  padding 20px
  margin 0
  color $gray
  font-size 18px
  $itemHeight = 30px
  li
    position relative
    margin 14px 0
    cursor pointer
    &:hover
      .popup
        transform scaleY(1)
    a
      display flex
      align-items center
      .icon-box
        font-size 30px
        margin-right 10px
    .popup
      position absolute
      left 30px
      bottom 100%
      display flex
      justify-content center
      align-items center
      padding 15px
      border-radius 5px
      background-color #fff
      transform scaleY(0)
      transform-origin bottom
      transition 0.3s
      &::after
        position absolute
        bottom -5px
        transform rotate(45deg)
        content ''
        width 10px
        height 10px
        background-color inherit
      .qrcode-img
        width 150px
        height 150px
        object-fit cover
</style>