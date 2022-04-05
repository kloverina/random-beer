<template>
  <div class='v-randomizer'>
    <h2> Beer! </h2>
    <div class='v-content'>
      bla bla bla
    </div>
  </div>

</template>

<script>
import axios from 'axios'

let previousRequestCancelToken = null
export default {
  name: 'VRandomizer',
  data() {
    return {
      beer: {}
    }
  },
  mounted() {
    this.getBeerData()
  },
  methods:{
    async getBeerData(){
      let that = this
      //Проверка, сущестует ли уже подобный запрос, если есть, отменяем
      if (previousRequestCancelToken) previousRequestCancelToken.cancel('CBU')
      //Создаем токен запроса, для возможности отмены запроса
      previousRequestCancelToken = axios.CancelToken.source()

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
    }
  }
}
</script>

<style scoped>

</style>