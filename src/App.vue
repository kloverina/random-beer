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

      <VProfile v-if='currentTab === 1'
                :user='user'
                @update-user-profile='getUserData'
      ></VProfile>
    </main>
    <footer>
      <span>
        <a href='https://github.com/kloverina'>© kloverina </a>, 2022
      </span>
    </footer>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VRandomizer from '@/components/VRandomizer'
import VProfile from '@/components/VProfile'
import axios from 'axios'
export default {
  components: { VProfile, VRandomizer, VHeader },
  data() {
    return {
      currentTab: 0,
      beer: {},
      user: {}
    }
  },
  mounted() {
    this.getUserData()
    this.getBeerData()
  },
  methods:{
    updateCurrentTab(tab) {
      this.currentTab = tab
    },

    async getBeerData(){
      let that = this

      axios({
        method: 'get',
        url: 'https://random-data-api.com/api/beer/random_beer',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(function (response) {
          console.log(`GET: /api/get_beer/ | SUCCESS`)
          console.log(response.data)
          that.beer = response.data
        })
        .catch(function (error) {
          console.log(`GET: /api/get_beer/ | ERROR`)
          console.log(error)
        })
    },

    async getUserData(){
      let that = this

      axios({
        method: 'get',
        url: 'https://random-data-api.com/api/users/random_user',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(function (response) {
          console.log(`GET: /api/get_user_data/ | SUCCESS`)
          console.log(response.data)
          that.user = response.data
        })
        .catch(function (error) {
          console.log(`GET: /api/get_user_data/ | ERROR`)
          console.log(error)
        })
    }
  }
}
</script>

<style lang='scss'>
@import "styles/index";
</style>