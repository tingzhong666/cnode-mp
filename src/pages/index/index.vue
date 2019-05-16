<template>
  <div>
    <!-- 分类 -->
    <view class="tabs">
      <Tab :tab='tab' @click='tabClick' :refreshing='refreshing' @refresh='refresh'/>
    </view>

    <!-- 主题列表 -->
    <div class="list" :animation='animationData'>
      <div class="li">
        <Topics
          :height="height"
          :list='listAll'
          @click="topicClick"
          @down="downLoad"
          label='全部'/>
      </div>
      <div class="li">
        <Topics
          :height="height"
          :list='listGood'
          @click="topicClick"
          @down="downLoad"
          label='精华'/>
      </div>
      <div class="li">
        <Topics
          :height="height"
          :list='listShare'
          @click="topicClick"
          @down="downLoad"
          label='分享'/>
      </div>
      <div class="li">
        <Topics
          :height="height"
          :list='listAsk'
          @click="topicClick"
          @down="downLoad"
          label='问答'/>
      </div>
      <div class="li">
        <Topics
          :height="height"
          :list='listJob'
          @click="topicClick"
          @down="downLoad"
          label='招聘'/>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '@/components/tab'
import Topics from '@/components/topics'
import { topics } from '@/utils/api'

export default {
  data () {
    return {
      tab: ['全部', '精华', '分享', '问答', '招聘'],
      listAll: null,
      listGood: null,
      listShare: null,
      listAsk: null,
      listJob: null,
      animationData: null,
      height: 0,
      downLoaded: true,
      refreshing: false
    }
  },
  components: {
    Tab,
    Topics
  },
  methods: {
    // 数据请求
    async init () {
      let res = await topics('全部', 1)
      this.listAll = res
      res = await topics('精华', 1)
      this.listGood = res
      res = await topics('分享', 1)
      this.listShare = res
      res = await topics('问答', 1)
      this.listAsk = res
      res = await topics('招聘', 1)
      this.listJob = res
    },
    // tab 点击
    tabClick (label, index) {
      // 如果点击的就是当前分类，则跳出 > 已经在组件中判断了，这里无需判断
      this.animation(index)
      topics(label, 1)
    },
    // 动画
    animation (index) {
      let width = wx.getSystemInfoSync().windowWidth
      let animation = wx.createAnimation({
        timingFunction: 'ease'
      })
      animation.translateX(-index * width).step()
      this.animationData = animation.export()
    },
    // 主题点击
    topicClick (id) {
      wx.navigateTo({
        url: '/pages/topic/main?id=' + id
      })
    },
    // 动态设置 scroll 高度
    scrollHeight () {
      let query = wx.createSelectorQuery()
      query.select('.tabs').boundingClientRect()
      query.exec(res => {
        this.height = wx.getSystemInfoSync().windowHeight - res[0].height
      })
    },
    // 触底加载
    async downLoad (label, page) {
      if (!this.downLoaded) return
      this.downLoaded = false
      let res = await topics(label, ++page)
      switch (label) {
        case '全部':
          this.listAll = this.listAll.concat(res)
          break
        case '精华':
          this.listGood = this.listGood.concat(res)
          break
        case '分享':
          this.listShare = this.listShare.concat(res)
          break
        case '问答':
          this.listAsk = this.listAsk.concat(res)
          break
        case '招聘':
          this.listJob = this.listJob.concat(res)
          break
      }
      this.downLoaded = true
    },
    // 当前分类刷新
    async refresh (label) {
      // 正在刷新中，再次点击无效 > 已在组件中判断了
      // 启动刷新动画
      this.refreshing = true
      let res = await topics(label, 1)
      switch (label) {
        case '全部':
          this.listAll = res
          break
        case '精华':
          this.listGood = res
          break
        case '分享':
          this.listShare = res
          break
        case '问答':
          this.listAsk = res
          break
        case '招聘':
          this.listJob = res
          break
      }
      // 刷新完成，关闭动画
      this.refreshing = false
    }
  },
  onLoad () {
    this.init()
  },
  mounted () {
    this.scrollHeight()
  }
}
</script>

<style lang="stylus" scoped>
.tabs
  position fixed
  top 0
  z-index 1000
  width 100%
.list
  position relative
  margin-top 92.8rpx
  .li
    position absolute
    width 100%
    &:nth-child(2)
      left 100%
    &:nth-child(3)
      left 200%
    &:nth-child(4)
      left 300%
    &:nth-child(5)
      left 400%
</style>
