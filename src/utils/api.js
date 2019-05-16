import config from '../config'
import { time } from './index'

// token/登录 验证
export function check (token) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.accessToken,
      method: 'POST',
      data: {
        accesstoken: token
      },
      success: res => {
        if (res.status !== 403) resolve(res.data.loginname)
        else resolve(false)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 获取用户详情
export function user (name) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.user + '/' + name,
      success: res => {
        let data = res.data.data
        data.recent_topics.forEach(item => {
          item.last_reply_at = time(item.last_reply_at)
        })
        data.recent_replies.forEach(item => {
          item.last_reply_at = time(item.last_reply_at)
        })
        resolve(data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 获取收藏主题列表
export function collectList (name) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.topicCollect + '/' + name,
      success: res => {
        let data = res.data.data
        data.forEach(item => {
          item.last_reply_at = time(item.last_reply_at)
        })
        resolve(data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 获取主题列表
export function topics (tab = '全部', page = 1) {
  return new Promise((resolve, reject) => {
    switch (tab) {
      case '全部':
        tab = ''
        break
      case '精华':
        tab = 'good'
        break
      case '分享':
        tab = 'share'
        break
      case '问答':
        tab = 'ask'
        break
      case '招聘':
        tab = 'job'
        break
    }
    wx.request({
      url: config.topics,
      data: {
        tab,
        page,
        limit: 20
      },
      success: res => {
        let data = res.data.data

        data = data.map(item => {
          // 参照掘金，将内容处理为纯文本
          // 抽取 p 标签的内容
          const r = /<p.*?(<\/p>)/g
          let arr = item.content.match(r)
          // 如果有 p 标签
          if (arr) {
            // 将数组拼接到一起
            item.content = arr.join('')
          }
          // 把所有标签删除
          item.content = item.content.replace(/<.*?>/g, '')
          // 选取前面部分
          if (item.content.length > 80) item.content = item.content.slice(0, 79) + '...'

          // 时间处理
          item.last_reply_at = time(item.last_reply_at)
          item.create_at = time(item.create_at)

          // 分类
          switch (item.tab) {
            case 'share':
              item.tab = '分享'
              break
            case 'ask':
              item.tab = '问答'
              break
            case 'job':
              item.tab = '招聘'
              break
          }

          // 置顶精华
          item.badge = item.top || item.good
          item.badgeT = item.top ? '置顶' : item.good ? '精华' : ''

          return item
        })

        resolve(data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 获取主题详情
export function topic (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.topic + '/' + id,
      data: {
        accesstoken: wx.getStorageSync('token'),
        mdrender: false
      },
      success: res => {
        resolve(res.data.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 收藏
export function collect (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.collect,
      method: 'POST',
      data: {
        accesstoken: wx.getStorageSync('token'),
        topic_id: id
      },
      success: res => {
        resolve(res.data.success)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 取消收藏
export function deCollect (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.deCollect,
      method: 'POST',
      data: {
        accesstoken: wx.getStorageSync('token'),
        topic_id: id
      },
      success: res => {
        resolve(res.data.success)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 获取全部消息
export function msg () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.messages,
      data: {
        accesstoken: wx.getStorageSync('token')
      },
      success: res => {
        let data = res.data.data
        // 未读和已读拼在一起
        data = data.hasnot_read_messages.concat(data.has_read_messages)
        resolve(data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 未读消息数
export function count () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.countL,
      data: {
        accesstoken: wx.getStorageSync('token')
      },
      success: res => {
        resolve(res.data.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 清除未读
export function clear () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.markAll,
      method: 'POST',
      data: {
        accesstoken: wx.getStorageSync('token')
      },
      success: res => {
        resolve(res.data.success)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 标记单个消息已读
export function mark (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.markOne + '/' + id,
      method: 'POST',
      data: {
        accesstoken: wx.getStorageSync('token')
      },
      success: res => {
        resolve(res.data.success)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 新手入门
export function intro () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.intro,
      success: res => {
        let data = res.data
        data = data.replace(/\n/g, '')
        data = data.match(/<div class="markdown-text.*?<\/div>/)[0]
        resolve(data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// api
export function api () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.apis,
      success: res => {
        let data = res.data
        data = data.replace(/\n/g, '')
        data = data.match(/<div class="markdown-text.*?<\/div>/)[0]
        resolve(data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
