import config from '../config'
import Towxml from 'towxml'

// 时间处理
export function time (time) {
  let stamp = new Date().getTime() - new Date(time).getTime()
  let arr = []
  arr.push({ stamp: stamp / 1000 / 60 / 60 / 24 / 30 / 12, label: '年前' })
  arr.push({ stamp: stamp / 1000 / 60 / 60 / 24 / 30, label: '个月前' })
  arr.push({ stamp: stamp / 1000 / 60 / 60 / 24, label: '天前' })
  arr.push({ stamp: stamp / 1000 / 60 / 60, label: '小时前' })
  arr.push({ stamp: stamp / 1000 / 60, label: '分钟前' })
  arr.push({ stamp: stamp / 1000, label: '秒前' })
  time = arr.find(item => item.stamp > 1)
  return Math.floor(time.stamp) + time.label
}

// towxml
export function md (data, that, mode = 'markdown') {
  const instance = new Towxml()
  data = instance.toJson(data, mode)
  data = instance.initData(data, {
    base: config.host,
    app: that
  })

  /**
   * '//' 开头路径，换成 'https://'
   * 这个我提交过 towxml 仓库，但作者没发布 npm ，还是只能自己处理
   */
  ;(function eachData (data) {
    let child = data.child
    if (
      data.attr &&
      data.attr.src &&
      data.attr.src.indexOf('//') === 0
    ) {
      data.attr.src = `https:${data.attr.src}`
    } else if (child && child.length) {
    // 如果有子级则对子级进行处理
      for (let i = 0, len = child.length; i < len; i++) {
        let childItem = child[i]
        eachData(childItem)
      }
    }
  })(data)

  data.theme = 'light'
  return data
}
