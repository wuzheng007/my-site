<template>
  <div class="message-area-container">
    <!-- v-on="$listeners"可以将父组件监听的事件传入DataForm组件 -->
    <DataForm v-on="$listeners" />
    <h2>{{title}}&nbsp;{{subTitle}}</h2>
    <DataList :list="list" />
  </div>
</template>

<script>
import DataForm from './DataForm'
import DataList from './DataList'
export default {
  name: 'MessageArea',
  props: {
    title: String,
    subTitle: String,
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    DataForm,
    DataList
  }
}
</script>

<style lang="stylus" scoped></style>