<template>
  <ul class="data-list-container">
    <li class="item" v-for="item in list" :key="item.id">
      <Avatar :src="item.avatar" />
      <div class="data">
        <div class="info-box">
          <span class="nickname">{{item.nickname}}</span>
          <span class="time">{{formatDate(item.createDate, true)}}</span>
        </div>
        <div class="content-box">
          <p class="content">{{item.content}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from '@/components/Avatar'
import { formatDate } from '@/utils'
export default {
  name: 'DataList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Avatar
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.item
  display flex
  border-bottom 1px solid lighten($gray, 20%)
  padding 15px 0
  .avatar-container
    margin-right 15px
  .data
    flex 1 1 auto
    display flex
    flex-direction column
    .info-box
      display flex
      justify-content space-between
      margin-bottom 0.6em
      .nickname
        color darken($success, 10%)
      .time
        font-size 12px
        color $gray
    .content-box
      font-size 14px
</style>