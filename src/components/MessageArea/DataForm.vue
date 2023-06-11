<template>
  <!-- 阻止表单提交的的默认行为 -->
  <form id="data-form-container" class="data-form-container" @submit.prevent="handleSubmit">
    <!-- 表单项 -->
    <div class="form-item">
      <div class="input-area">
        <input type="text" placeholder="用户昵称" maxlength="10" v-model="form.nickname">
        <span class="tip">{{form.nickname.length}}/10</span>
      </div>
      <!-- 错误提示 -->
      <div class="error">{{error.nickname}}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea placeholder="请输入内容" maxlength="300" v-model="form.content"></textarea>
        <span class="tip">{{form.content.length}}/300</span>
      </div>
      <!-- 错误提示 -->
      <div class="error">{{error.content}}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="submiting">{{submiting ? '提交中...' : '提交'}}</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'DataForm',
  data () {
    return {
      // 表单数据
      form: {
        nickname: '',
        content: ''
      },
      // 表单验证不通过提示的错误信息
      error: {
        nickname: '',
        content: ''
      },
      submiting: false  // 是否正在提交中
    }
  },
  methods: {
    handleSubmit () {
      this.error.nickname = this.form.nickname ? '' : '请填写昵称'
      this.error.content = this.form.content ? '' : '请填写内容'
      if (this.error.nickname !== '' || this.error.content !== '') return false
      this.submiting = true
      // 触发当前组件的submit事件，传递一个回调函数，让组件元素处理完成之后执行一些重置操作，status表示提交结果成功与否
      this.$emit('submit', this.form, (status) => {
        if (status) {
          this.form.nickname = ''
          this.form.content = ''
        }
        this.submiting = false
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/var.styl'
.data-form-container
  margin-bottom 20px
  overflow hidden
  .form-item
    margin-bottom 8px
    .input-area
      width 50%
      position relative
    .text-area
      position relative
    .tip
      position absolute
      right 5px
      bottom 5px
      color $lightWords
      font-size 12px
input, textarea
  display block
  box-sizing border-box
  width 100%
  border 1px dashed $gray
  outline none
  color $words
  font-size 14px
  border-radius 4px
  &:focus
    border-color $primary
input
  padding 0 15px
  height 40px
textarea
  resize none
  padding 8px 15px
  height 120px
.error
  height 20px
  margin-top 6px
  color $danger
  font-size 14px
  line-height 20px
button
  position relative
  cursor pointer
  border none
  outline none
  width 100px
  height 34px
  color #fff
  border-radius 4px
  background-color $primary
  &:hover
    background-color darken($primary, 10%) // 颜色变暗10%
  &:disabled
    background-color lighten($primary, 20%) // 亮度增加20%
    cursor not-allowed
</style>