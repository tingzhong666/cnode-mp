<template>
  <div>
    <div class="user" :class="hover ? 'hover' : ''" @click="click">
      <!-- 头像 -->
      <div class="img">
        <img :src="img">
      </div>
      <!-- 信息 -->
      <div class="info">
        <!-- 用户名 -->
        <div class="name">{{name}}</div>
        <!-- github名 -->
        <div class="github"><span class="iconfont icon-GitHub"></span> @{{github}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hover', 'img', 'name', 'github'],
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.user
  width 100%
  background-color #fff
  display flex
  padding 20rpx 0
  &.hover:active
    background-color $hover
  .img
    flex 2
    display flex
    align-items center
    justify-content center
    img
      width 100rpx
      height 100rpx
      border-radius 50%
  .info
    flex 8
    display flex
    flex-direction column
    .name
      font-size 40rpx
      flex 7
    .github
      flex 3
      font-size 30rpx
</style>
