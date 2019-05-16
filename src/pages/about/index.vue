<template>
  <div>
    <towxml :md='data' v-if="data"/>
  </div>
</template>

<script>
import { md } from '@/utils/index'

export default {
  data () {
    return {
      data: null
    }
  },
  onLoad () {
    let data = '# 关于\n\n这个小程序是我用`mpvue`进行开发的 **cnode** 社区微信小程序\n\n**项目地址**：<https://github.com/tingzhong666/cnode-mp>\n\n\n\n我还有一个使用原生开发的 **cnode** 社区小程序，还有网页端的。\n\n感兴趣的可以去我 **github** 看看\n\n## 联系\n\n**@github**： <https://github.com/tingzhong666>\n\n**@wx**：cgxiaozhi\n\n**@qq**：2529277504'
    this.data = md(data, this)
  }
}
</script>
