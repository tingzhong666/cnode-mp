<template>
  <div>
    <Load v-if="!loaded || !md"/>
    <div v-if="loaded">
      <!-- 作者栏 -->
      <div class="author" @click="user(data.author.loginname)">
        <img :src="data.author.avatar_url">
        {{data.author.loginname}}
      </div>

      <!-- 标题 -->
      <div class="title">{{data.title}}</div>

      <!-- md 内容 -->
      <towxml :md="md" v-if="md"/>

      <!-- info -->
      <div class="info">
        <!-- 阅读 收藏 -->
        阅读 {{data.visit_count}}
        <div class="collect" @click="collect">{{isCollect ? '取消收藏' : '收藏'}}</div>
      </div>

      <!-- 评论 -->
      <div class="comments">
        <div class="comment" v-for="item in comments" :key='item'>
          <!-- 作者栏 -->
          <div class="author">
            <!-- 头像 -->
            <div class="img" @click="user(item.author.loginname)">
              <img :src="item.author.avatar_url">
            </div>
            <!-- info -->
            <div class="info">
              <div class="name">{{item.author.loginname}}</div>
              <div class="time">
                {{item.create_at}} • 第{{item.order}}楼
              </div>
            </div>
            <!-- 赞 -->
            <div class="ups">赞 {{item.ups.length}}</div>
          </div>
          <!-- md 内容 -->
          <towxml :md='item.content'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Load from '@/components/load'
import { topic, collect, deCollect } from '@/utils/api'
import { time, md } from '@/utils/index'

export default {
  data () {
    return {
      id: null,
      loaded: false,
      data: null,
      md: null
    }
  },
  computed: {
    comments () {
      if (this.data) {
        let arr = []
        this.data.replies.map((item, index) => {
          item.order = ++index
          item.create_at = time(item.create_at)
          item.content = md(item.content, this)
          arr.unshift(item)
        })
        return arr
      } else {
        return []
      }
    },
    isCollect () {
      return this.data ? this.data.is_collect : false
    }
  },
  components: {
    Load
  },
  async onLoad (query) {
    this.init()
    this.id = query.id
    await this.getTopic()
  },
  methods: {
    // 请求数据
    async getTopic () {
      this.data = await topic(this.id)
      this.md = md(this.data.content, this)
      this.loaded = true
    },
    init () {
      this.id = null
      this.loaded = false
      this.data = null
      this.md = null
    },
    // 收藏
    async collect () {
      if (!this.$store.state.logined) {
        wx.showModal({
          title: '提示',
          content: '未登录',
          showCancel: false
        })
        return
      }
      let res
      if (this.isCollect) {
        res = await deCollect(this.id)
      } else {
        res = await collect(this.id)
      }
      if (res) this.data.is_collect = !this.isCollect
    },
    // 用户详情
    user (loginname) {
      wx.navigateTo({
        url: '/pages/user/main?loginname=' + loginname
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
// 作者栏
.author
  font-size 35rpx
  font-weight 600
  background-color #fff
  padding 20rpx 0
  img
    width 70rpx
    height 70rpx
    border-radius 50%
    margin 0 20rpx 0 40rpx
    vertical-align middle
// 标题
.title
  background-color #fff
  font-size 38rpx
  padding 0 40rpx
  font-weight 700
  border-bottom 1rpx solid #eee
  padding-bottom 20rpx
// 信息
.info
  color $ash
  display flex
  justify-content space-between
  align-items center
  font-size 20rpx
  background-color #fff
  padding 0 40rpx 20rpx
  margin-bottom 20rpx
  .collect
    background-color $greend
    border-radius 7rpx
    color #fff
    padding 10rpx 20rpx
    font-size 25rpx
// 评论
.comments
  background-color #fff
  .comment
    .author
      display flex
      .img
        flex 1
        display flex
        justify-content center
        align-items center
        img
          width 70rpx
          height 70rpx
          border-radius 50%
          margin 0
      .info
        flex 5
        display flex
        flex-direction column
        align-items flex-start
        margin 0
        padding 0
        .name
          color $color
          font-size 30rpx
          font-weight 400
        .time
          font-weight 400
          color $ash
          font-size 20rpx
      .ups
        font-size 20rpx
        font-weight 400
        color $ash
        flex 1
        display flex
        justify-content center
        align-items center
</style>
