<template>
  <div class="tab">
    <div
      class="item"
      v-for="(item, index) in tabs"
      :key="item.label"
      @click='click($event, item, index)'
      :class="item.active ? 'active' : ''"
      >
      {{item.label}}
    </div>
    <!-- 下划线 -->
    <div class="down-line" :animation='animationData'></div>
    <!-- 刷新按钮 -->
    <div
      class="iconfont icon-shuaxin"
      :animation='refreshA'
      @transitionend='refreshend'
      @click="refresh"
      :style="style"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animationData: null,
      tabs: this.tab.map((item, index) => {
        return {
          label: item,
          active: index === 0
        }
      }),
      refreshA: null,
      style: '',
      rotate: 0,
      refreshI: null
    }
  },
  props: ['tab', 'refreshing'],
  watch: {
    refreshing (newV, oldV) {
      // 没有正在刷新 > 正在刷新 设置循环动画
      if (newV && !oldV) {
        this.style = 'color: #fff;'
        this.refreshI = setInterval(() => {
          this.rotate += 360
          let animation = wx.createAnimation()
          animation.rotateZ(this.rotate).step()
          this.refreshA = animation.export()
        }, 300)
        return
      }
      // 从正在刷新 > 刷新完成  清空循环定时器动画
      if (!newV && oldV) {
        if (!this.refreshA) this.style = ''
        clearInterval(this.refreshI)
        this.refreshA = null
      }
    }
  },
  methods: {
    // tab 点击，同时触发动画
    async click (e, item, index) {
      // 如果选中的就是本身，则跳出
      if (item.active) return
      // 选中
      this.tabs.forEach(v => {
        v.active = v.label === item.label
      })
      // 动画
      this.animation(e.mp.currentTarget.offsetLeft)
      // 提交给外部事件
      this.$emit('click', item.label, index)
    },
    // 动画
    animation (left) {
      // 下划线动画
      let animation = wx.createAnimation({
        timingFunction: 'ease'
      })
      // 下划线移动
      animation.left(left).step()
      // 导出
      this.animationData = animation.export()
    },
    // 刷新按钮点击
    refresh () {
      // 正在刷新 则跳出
      if (this.refreshing) return
      // 否则提交刷新事件
      let label = this.tabs.find(item => item.active).label
      this.$emit('refresh', label)
    },
    // 刷新动画结束
    refreshend () {
      this.style = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab
  background-color $greend
  display flex
  color #ffffff80
  font-size 25rpx
  position relative
  .item
    padding 30rpx 0
    width 120rpx
    text-align center
    &.active
      color #fff
    &:active
      background-color #00000010
  // 下划线
  .down-line
    position absolute
    background-color #fff
    width 120rpx
    height 8rpx
    bottom 1rpx
    left 0
  // 刷新按钮
  .icon-shuaxin
    position absolute
    right 50rpx
    top 26rpx
</style>
