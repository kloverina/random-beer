<template>
  <div id="app">
    <VHeader
      @update-current-tab='updateCurrentTab'

    ></VHeader>
    <main class="content">
      <!-- there is a perfect place for vue-router, but i have no idea how to deploy spa app :( -->
      <!-- so for now lets pretend that it IS a spa app. thx! -->
      <VRandomizer v-if='currentTab === 0'>

      </VRandomizer>

      <VProfile v-if='currentTab === 1'>

      </VProfile>
    </main>
    <footer>
      <span>
        <a href='https://github.com/kloverina'>kloverina </a>, 2022
      </span>
    </footer>
  </div>
</template>


<style lang='scss'>
  @import "styles/index";
</style>
<script>
import VHeader from '@/components/VHeader'
import VRandomizer from '@/components/VRandomizer'
import VProfile from '@/components/VProfile'
export default {
  components: { VProfile, VRandomizer, VHeader },
  data() {
    return {
      currentTab: 0
    }
  },
  methods:{
    updateCurrentTab(tab) {
      this.currentTab = tab
    }
  }
}
</script>