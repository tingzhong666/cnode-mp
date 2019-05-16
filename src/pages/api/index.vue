<template>
  <div>
    <towxml :md='data' v-if="data"/>
  </div>
</template>

<script>
import { md } from '@/utils/index'
import { api } from '@/utils/api'

export default {
  data () {
    return {
      data: null
    }
  },
  async onLoad () {
    this.data = md(await api(), this, 'html')
  }
}
</script>

<style lang="stylus" scoped>

</style>
