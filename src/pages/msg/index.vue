<template>
  <div>
    <div v-if="!logined" class="not">
      <span class="iconfont icon-xinxi"></span>
      <span>未登录</span>
    </div>
    <div v-if="logined">
      <div class="handle" @click="clear">
        <span class="iconfont icon-quanbuyidu"></span>
        清除未读
      </div>

      <div class="li" v-for="item in msg" :key='item' @click="topic(item.topic.id, item.has_read)">
        <div class="img" @click="user(item.author.loginname)">
          <img :src="item.author.avatar_url">
        </div>

        <div class="info">
          <span class="green">{{item.author.loginname}}</span>
          <span>回复了问题</span>
          <span class="green">{{item.topic.title}}</span>
        </div>

        <!-- 未读小红点 -->
        <div class="red" v-if="!item.has_read"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { msg, clear, mark } from '@/utils/api'

export default {
  data () {
    return {
      // 未读
      msg: []
    }
  },
  computed: {
    ...mapState(['logined'])
  },
  async onShow () {
    await this.init()
  },
  methods: {
    ...mapActions(['count']),
    async init () {
      this.msg = []
      let res = await Promise.all([msg(), this.count()])
      this.msg = res[0]
    },
    // 清除未读
    async clear () {
      if (await clear()) {
        wx.showModal({
          title: '提示',
          content: '清除成功',
          showCancel: false
        })
        await this.init()
      }
    },
    // 主题详情
    topic (id, isRead) {
      wx.navigateTo({
        url: '/pages/topic/main?id=' + id,
        success: async () => {
          if (!isRead) await mark(id)
        }
      })
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
// 未登录
.not
  background-color #fff
  display flex
  flex-direction column
  padding 20rpx
  .iconfont
    font-size 80rpx
    display flex
    color $ash + 70%
    justify-content center
  span:last-child
    color $ash
    display flex
    justify-content center
    font-size 30rpx
    margin-top 20rpx
// 清除未读
.handle
  color $ash
  text-align center
  background-color #fff
  padding 20rpx 0
  border-bottom 1rpx solid #eee
  &:active
    background-color $hover
// 列表
.li
  background-color #fff
  display flex
  position relative
  &:active
    background-color $hover
  .img
    flex 1
    display flex
    justify-content center
    align-items center
    padding 20rpx
    img
      width 70rpx
      height 70rpx
      border-radius 7rpx
  .info
    flex 8
    display flex
    align-items center
    border-bottom 1rpx solid #eee
    .green
      color $greend
    span:nth-child(2)
      margin 0 10rpx
  &:last-child
    .info
      border none
  // 未读小红点
  .red
    background-color red
    border-radius 50%
    width 12rpx
    height 12rpx
    position absolute
    right 20rpx
    top 20rpx
</style>
