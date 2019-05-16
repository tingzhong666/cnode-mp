const api = 'https://cnodejs.org/api/v1'
const host = 'https://cnodejs.org'

export default {
  host,
  api,
  // 主题列表 GET
  topics: api + '/topics',
  // 主题详情
  topic: api + '/topic',

  // 收藏的主题列表 GET
  topicCollect: api + '/topic_collect',
  // 收藏主题 POST
  collect: api + '/topic_collect/collect',
  // 取消收藏主题 POST
  deCollect: api + '/topic_collect/de_collect',

  // 用户详情 GER
  user: api + '/user',
  // accessToken验证 POST
  accessToken: api + '/accessToken',

  // 获取所有消息列表 GET
  messages: api + '/messages',
  // 获取未读消息数 GET
  countL: api + '/message/count',
  // 全部标记为已读 POST
  markAll: api + '/message/mark_all',
  // 标记单个消息已读 POST
  markOne: api + '/message/mark_one',

  // 新手入门
  intro: 'https://cnodejs.org/getstart',
  // CNode 开放api
  apis: 'https://cnodejs.org/api'
}
