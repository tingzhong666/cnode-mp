<template>
  <div>
    <img src="/static/images/logo_mp.png" :style='style'>
  </div>
</template>

<script>
export default {
  data () {
    return {
      style: ''
    }
  },
  onLoad () {
    let top = wx.getSystemInfoSync().windowWidth / 2
    this.style = 'margin: ' + top + 'px 7.5% 0;'
    let t = setTimeout(() => {
      wx.switchTab({
        url: '/pages/index/main'
      })
      clearTimeout(t)
    }, 1000)
  }
}
</script>

<style lang="stylus">
page
  background-color #fff
</style>

<style lang="stylus" scoped>
img
  width 85%
  height 150rpx
</style>

