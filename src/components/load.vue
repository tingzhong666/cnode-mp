<template>
  <div class="load">
    <img src="/static/images/loading.gif">
    加载中
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.load
  background-color #fff
  display flex
  justify-content center
  align-items center
  padding 40rpx 0
  color $ash
  img
    width 50rpx
    height 50rpx
    margin 0 20rpx 0 0
</style>
