<template>
  <header>
    <nav class='header_nav'>
      <button class='psevdo-logo' @click='updateCurrentTab(0)'>
        <span class='katy-berry'>Random</span>
        <span class='katy-berry'>beer!</span>
      </button>


      <button class='profile-pic' @click='updateCurrentTab(1)'>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  data() {
    return {
      currentTab: 0
    }
  },
  methods:{
    updateCurrentTab(tab){
      this.currentTab = tab
      console.log(this.currentTab)
      this.$emit('update-current-tab', this.currentTab)
    }
  }
}
</script>

<style scoped>

</style>