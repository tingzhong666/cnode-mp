import Vuex from 'vuex'
import Vue from 'vue'
import { check, user, collectList, count } from './utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false,
    userInfo: null,
    collect: null,
    // 是否有未读消息
    isMsg: false
  },
  getters: {
    // 创建的主题列表
    recentTopics (state) {
      return state.logined ? state.userInfo.recent_topics : null
    },
    // 参与的主题列表
    recentReplies (state) {
      return state.logined ? state.userInfo.recent_replies : null
    }
  },
  mutations: {
    init (state, params) {
      state.logined = params.logined
      state.userInfo = params.userInfo
      state.collect = params.collect
      state.isMsg = params.isMsg

      state.isMsg ? wx.setshowTabBarRedDot({ index: 3 }) : wx.hideTabBarRedDot({ index: 3 })
    },
    // 是否有未读消息
    setIsMsg (state, isMsg) {
      state.count = isMsg
      state.isMsg ? wx.setshowTabBarRedDot({ index: 3 }) : wx.hideTabBarRedDot({ index: 3 })
    },
    // 清空数据
    clear (state) {
      state.logined = false
      state.userInfo = null
      state.collect = null
      state.isMsg = false
      wx.clearStorageSync()
    }
  },
  actions: {
    // 验证 token 并请求数据
    async init (store) {
      let token = wx.getStorageSync('token')
      // 没有本地 token 跳出
      if (!token) return
      let name = await check(token)
      // 验证失败跳出
      if (!name) return false
      let info = await Promise.all([user(name), collectList(name), count()])
      store.commit('init', {
        logined: true,
        userInfo: info[0],
        collect: info[1],
        isMsg: !!info[2]
      })
      return true
    },
    // 是否有未读消息
    async count (store) {
      let n = await count()
      store.commit('setIsMsg', !!n)
    }
  }
})
