<template>
  <div class='v-randomizer randomizer'>

    <h2> Get your random beer! </h2>
    <div class='content'>
      <p>Click the button below to get your new random beer. And... don't forget to try it! </p>
      <div class='beer-block'>
        <div class='beer-block__item beer-pic'>
          <div v-if='!showBeerInfo'>
            <img src="@/assets/question-mark_colored.svg" width="200px" height="200px" aria-hidden="true" />
          </div>

        </div>
        <div class='beer-block__item beer-info'>

        </div>
        <button @click='handleBeerBClick' class='beer-block__item beer-button'>
          <span> Get new beer</span>
        </button>
      </div>
    </div>
    <div class='about'>
      <button class='about_button' :class='{about_button__colored: !showAboutInfo}'
              @click='handleAboutClick'>
        <span>About this app</span>

        <div class='about_info' v-if='showAboutInfo'>
          <p> You want to try some new sort/brand of beer but suffering over choosing one?
            Let this app decide for you! Just hit the button!</p>
          <p> Hint: you can also visit your profile by clicking the profile icon. Enjoy!</p>
        </div>
      </button>
    </div>
  </div>

</template>

<script>

export default {
  name: 'VRandomizer',
  data() {
    return {
      showAboutInfo:false,
      showBeerInfo: false
    }
  },
  mounted() {

  },
  methods:{
    handleAboutClick(){
      this.showAboutInfo = !this.showAboutInfo
    },
    handleBeerBClick(){
      if(!this.showBeerInfo){
        this.showBeerInfo = true
        return
      }

      this.$emit('get-new-beer')
    },
    changeColor(){

    }
  }
}
</script>

<style scoped lang='scss'>
 @import "src/styles/randomizer";
</style>