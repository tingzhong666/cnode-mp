<template>
  <div>
    <div
      class="li"
      v-for="item in list"
      :key="item.label"
      @click='click(item.label)'
      >
      <div class="fonticon">
        <span :class="item.fonticon"></span>
      </div>
      <div class="label">{{item.label}}</div>
      <div class="count">{{item.count}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    click (label) {
      this.$emit('click', label)
    }
  }
}
</script>

<style lang="stylus" scoped>
.li
  background-color #fff
  border-bottom 1rpx solid #eee
  display flex
  padding 30rpx 10rpx
  &:active
    background-color $hover
  .fonticon
    flex 1
    text-align center
    color $greend
  .label
    flex 8
  .count
    flex 2
    font-size 30rpx
    color $ash
    text-align right
    padding-right 10rpx
</style>
