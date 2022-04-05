<template>
  <section class='v-profile profile'>
    <div class='profile__line'>
      <div class='profile-pic_block'>
        <img :src='user.avatar' height='100px' width='100px'>
      </div>
      </div>
    <div class='profile__line'>

    </div>
  </section>

</template>

<script>
import axios from 'axios'

export default {
  name: 'VProfile',
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.getUserData()
  },
  methods:{
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

<style lang='scss' scoped>
 @import "src/styles/profile";
</style>