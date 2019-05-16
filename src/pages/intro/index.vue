<template>
  <div>
    <towxml :md="data" v-if="data"/>
  </div>
</template>

<script>
import { intro } from '@/utils/api'
import { md } from '@/utils/index'

export default {
  data () {
    return {
      data: null
    }
  },
  async onLoad () {
    this.data = md(await intro(), this, 'html')
  }
}
</script>

<style lang="stylus" scoped>

</style>
