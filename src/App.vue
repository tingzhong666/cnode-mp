<script>
export default {
  created () {
    this.$store.dispatch('init')
  }
}
</script>

<style lang="stylus">
page
  color $color
  background-color $page-bgc
  font-size $fontsize
</style>

