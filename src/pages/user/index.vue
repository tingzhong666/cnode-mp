<template>
  <div>
    <User 
      :img="userinfo ? userinfo.avatar_url : ''"
      :name='loginname'
      :github="userinfo ? userinfo.githubUsername : ''"/>

    <div class="hr"></div>

    <Fnlist
      :list='list'
      @click="push"/>
  </div>
</template>

<script>
import { user, collectList } from '@/utils/api'
import User from '@/components/user'
import Fnlist from '@/components/fnlist'

export default {
  data () {
    return {
      loginname: null,
      userinfo: null,
      collect: []
    }
  },
  computed: {
    list () {
      return [
        {
          label: '创建的主题',
          fonticon: 'iconfont icon-huati',
          count: this.recentTopics.length < 0 ? '' : this.recentTopics.length + '篇'
        },
        {
          label: '参与的主题',
          fonticon: 'iconfont icon-canyu',
          count: this.recentReplies.length < 0 ? '' : this.recentReplies.length + '篇'
        },
        {
          label: '收藏的主题',
          fonticon: 'iconfont icon-shoucang2',
          count: this.collect.length < 0 ? '' : this.collect.length + '篇'
        }
      ]
    },
    recentTopics () {
      return this.userinfo ? this.userinfo.recent_topics : []
    },
    recentReplies () {
      return this.userinfo ? this.userinfo.recent_replies : []
    }
  },
  components: {
    User,
    Fnlist
  },
  async onLoad (query) {
    await this.init(query)
  },
  methods: {
    async init (query) {
      this.loginname = query.loginname
      this.userinfo = null
      this.collect = []

      let res = await Promise.all([user(this.loginname), collectList(this.loginname)])
      this.userinfo = res[0]
      this.collect = res[1]
    },
    // 功能列表页面
    push (label) {
      wx.navigateTo({
        url: `/pages/topics/main?loginname=${this.loginname}&label=${label}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.hr
  height 20rpx
</style>
