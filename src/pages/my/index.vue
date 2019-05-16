<template>
  <div>
    <div style="margin-top: 20rpx;"></div>
    <User
      :hover='!logined'
      :img='logined ? userInfo.avatar_url : "/static/images/logout.png"'
      :name='logined ? userInfo.loginname : "未登录"'
      :github='logined ? userInfo.githubUsername : ""'
      @click='login'
      />

    <div style="margin-top: 20rpx;"></div>
    <FnList :list='list' @click='fn'/>

    <!-- 退出登录 -->
    <div class="logout" @click='clear'>
      退出登录
    </div>
  </div>
</template>

<script>
import User from '@/components/user'
import { mapState, mapGetters, mapMutations } from 'vuex'
import FnList from '@/components/fnlist'

export default {
  data () {
    return {
      loaded: false,
      mode: 'my'
    }
  },
  computed: {
    ...mapState(['logined', 'userInfo', 'collect']),
    ...mapGetters(['recentTopics', 'recentReplies']),
    // 功能选项列表
    list () {
      return [
        {
          label: '创建的主题',
          fonticon: 'iconfont icon-huati',
          count: (this.logined ? this.recentTopics.length : -1) < 0 ? '' : this.recentTopics.length + '篇'
        },
        {
          label: '参与的主题',
          fonticon: 'iconfont icon-canyu',
          count: (this.logined ? this.recentReplies.length : -1) < 0 ? '' : this.recentReplies.length + '篇'
        },
        {
          label: '收藏的主题',
          fonticon: 'iconfont icon-shoucang2',
          count: (this.collect ? this.collect.length : -1) < 0 ? '' : this.collect.length + '篇'
        },
        {
          label: '关于',
          fonticon: 'iconfont icon-guanyu',
          count: ''
        }
      ]
    }
  },
  components: {
    User,
    FnList
  },
  onShow () {
    this.$store.dispatch('init')
  },
  methods: {
    ...mapMutations(['clear']),
    login () {
      if (this.logined) return
      wx.navigateTo({
        url: '/pages/login/main'
      })
    },
    // 功能列表
    fn (label) {
      // 权限
      let power = ['创建的主题', '参与的主题', '收藏的主题']
      if (!this.logined && power.includes(label)) {
        wx.showModal({
          title: '提示',
          content: '未登录',
          showCancel: false
        })
        return
      }
      if (power.includes(label)) {
        wx.navigateTo({
          url: `/pages/topics/main?loginname=${this.userInfo.loginname}&label=${label}`
        })
        return
      }
      wx.navigateTo({
        url: '/pages/about/main'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
// 退出登录
.logout
  color red - 20%
  display flex
  justify-content center
  font-size 35rpx
  background-color #fff
  margin-top 20rpx
  padding 30rpx 0
  &:active
    background-color $hover
</style>
