<template>
  <div>
    <div class="li" v-for="item in list" :key='item' @click="click(item.id)">
      <div class="title">{{item.title}}</div>
      {{item.author.loginname}} {{item.last_reply_at}}
    </div>
  </div>
</template>

<script>
import { user, collectList } from '@/utils/api'

export default {
  data () {
    return {
      loginname: null,
      label: null,
      list: []
    }
  },
  async onLoad (query) {
    this.init(query)
    await this.getData()
  },
  methods: {
    // 初始数据在这呢
    init (query) {
      this.loginname = query.loginname
      this.label = query.label
      this.list = []

      wx.setNavigationBarTitle({
        title: this.label
      })
    },
    async getData () {
      switch (this.label) {
        case '创建的主题':
          this.list = (await user(this.loginname)).recent_topics
          break
        case '参与的主题':
          this.list = (await user(this.loginname)).recent_replies
          break
        case '收藏的主题':
          this.list = await collectList(this.loginname)
          break
      }
    },
    click (id) {
      wx.navigateTo({
        url: '/pages/topic/main?id=' + id
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.li
  background #fff
  color $ash
  border-bottom 1rpx solid #eee
  padding 20rpx
  &:active
    background-color $hover
  .title
    font-size 30rpx
    color $color
</style>
