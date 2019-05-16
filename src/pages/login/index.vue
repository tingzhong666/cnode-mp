<template>
  <div>
    <div class="scan" @click='scan'>
      <span class="iconfont icon-saoma"></span>
      <span>扫码登录</span>
    </div>

    <!-- 教程指南 -->
    <div class="course">
      <!-- 进入设置 -->
      <div class="title">
        1.登录 CNode 中文社区网页端后，进入设置
      </div>
      <div class="content">
        <img src="/static/images/course1.png">
      </div>
      <!-- 扫描二维码 -->
      <div class="title">
        1.滑到网页底端，扫描二维码登录
      </div>
      <div class="content">
        <img src="/static/images/course2.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scan () {
      wx.scanCode({
        success: res => {
          // 存入 token
          wx.setStorageSync('token', res.result)
          this.$store.dispatch('init')
            .then(suc => {
              if (suc) {
                wx.switchTab({
                  url: '/pages/my/main'
                })
              }
            })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.scan
  margin-top 20rpx
  background-color #fff
  padding 30rpx 0
  display flex
  color $ash
  .iconfont
    flex 1
    font-size 80rpx
    display flex
    justify-content center
    align-items center
  span:last-child
    flex 5
    display flex
    align-items center
    font-size 50rpx
    padding-left 10rpx
// 教程指南
.course
  margin-top 20rpx
  background-color #fff
  padding 0 20rpx 20rpx 20rpx
  font-size 35rpx
  font-weight 700
  .title
    padding 40rpx 0 30rpx 0
  .content
    image
      width 100%
</style>
