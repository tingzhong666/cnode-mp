<template>
  <div>
    <Load v-if="!list"/>
    
    <div class="list" v-if="list">
      <scroll-view
        :style="'height: ' + height + 'px;'"
        scroll-y
        lower-threshold="500"
        @scrolltolower="down">
        <div class="li" v-for="item in list" :key='item.id' @click="click(item.id)">
          <!-- 作者栏 -->
          <div class="author">
            <!-- 头像 -->
            <div class="img">
              <img :src="item.author.avatar_url" alt="">
            </div>

            <!-- 信息 -->
            <div class="info">
              <!-- 作者名 -->
              <div class="name">{{item.author.loginname}}</div>
              <!-- 时间 -->
              <div class="time">
                发布于 {{item.create_at}} • 新回复 {{item.last_reply_at}}
              </div>
            </div>

            <!-- 分类 -->
            <div class="tab">{{item.tab}}</div>
          </div>

          <!-- 主题部分内容 -->
          <div class="topic">
            <!-- 标题 -->
            <div class="title">
              <!-- 置顶精华 -->
              <span class="badge" v-if="item.badge">{{item.badgeT}}</span>
              {{item.title}}
            </div>
            <!-- 部分内容 -->
            <div class="content">{{item.content}}</div>
          </div>

          <!-- 互动 -->
          <div class="action">
            <!-- 评论 -->
            <div class="container">
              <span class="iconfont icon-pinglun"></span>
              {{item.reply_count}}
            </div>
            <!-- 浏览量 -->
            <div class="container">
              <span class="iconfont icon-liulanliang"></span>
              {{item.visit_count}}
            </div>
          </div>
        </div>
        <Load v-if="downed"/>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import Load from '@/components/load'

export default {
  data () {
    return {
      page: 1,
      downed: false
    }
  },
  props: ['list', 'height', 'label'],
  components: {
    Load
  },
  methods: {
    // 触底
    down (e) {
      this.downed = true
      this.$emit('down', this.label, this.page)
    },
    // 主题点击
    click (id) {
      this.$emit('click', id)
    }
  },
  watch: {
    list (newV, oldV) {
      if (!oldV) return
      if (newV.length !== oldV.length) {
        ++this.page
        this.downed = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.li
    background-color #fff
    margin-bottom 20rpx
    padding-bottom 10rpx
    &:active
      background-color $hover
    // 作者栏
    .author
      display flex
      height 100rpx
      // 头像
      .img
        display flex
        justify-content center
        align-items center
        flex 2
        img
          width 70rpx
          height 70rpx
          border-radius 50%
      // 信息
      .info
        flex 10
        display flex
        flex-direction column
        .name
          flex 1
          display flex
          align-items center
        .time
          color $ash
          font-size 20rpx
          flex 1
          display flex
          align-items flex-start
      // 分类
      .tab
        flex 1
        color $ash
        display flex
        justify-content flex-end
        align-items center
        padding-right 20rpx
        font-size 20rpx
    // 内容
    .topic
      padding-left 20rpx
      // 标题
      .title
        font-weight 700
        margin-bottom 10rpx
        // 置顶精华
        .badge
          background-color $greend + 90%
          color $greend
          font-weight 400
          font-size 17rpx
          padding 3rpx 5rpx
          border-radius 7rpx
          float left
          margin 3rpx 10rpx 0 0
    // 互动
    .action
      padding-left 20rpx
      display flex
      font-size 20rpx
      margin-top 20rpx
      color $ash
      .container
        display flex
        align-items center
        margin-right 20rpx
        .iconfont
          margin-right 7rpx
          &.icon-pinglun
            font-size 22rpx
</style>
