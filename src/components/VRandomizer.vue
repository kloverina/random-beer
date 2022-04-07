<template>
  <div class='v-randomizer randomizer'>

    <h2> Get your beer advice! </h2>
    <div class='content'>
      <p class='randomizer-p'>Click the button below to get your recommended beer.  </p>
      <p class='randomizer-p'> And... don't forget to try it! </p>
      <div class='beer-block'>
        <div class='beer-block__item beer-pic' v-bind:style="{ background: color}">
          <div v-if='!showBeerInfo'>
            <img src="@/assets/question-mark_colored.svg" width="200px" height="200px" aria-hidden="true" />
          </div>
          <div v-else>
            <img src="@/assets/beer.svg" width="200px" height="240px" aria-hidden="true" />
          </div>

        </div>
        <div class='beer-block__item beer-info' v-if='showBeerInfo'>
          <div class='beer-info__general grid'>
            <div class="grid-row">
              <div class='grid-col grid-col-title'> Name: </div>
              <div class='grid-col grid-col-info'> {{beer.name}} </div>
            </div>

            <div class="grid-row">
              <div class='grid-col grid-col-title'> Brand:  </div>
              <div class='grid-col grid-col-info'> {{beer.brand}} </div>
            </div>

            <div class="grid-row">
              <div class='grid-col grid-col-title'> Alcohol: </div>
              <div class='grid-col grid-col-info'> {{beer.alcohol}} </div>
            </div>

            <div class="grid-row">
              <div class='grid-col grid-col-title'> IBU: </div>
              <div class='grid-col grid-col-info'> {{beer.ibu}} </div>
            </div>


          </div>
          <div class='beer-info__additional'>
            <button class='info-button' @click='showDetailedInfo = !showDetailedInfo'>
              Detailed info
            </button>
            <div class='grid' v-if='showDetailedInfo'>
              <div class="grid-row">
                <div class='grid-col grid-col-title'> Style: </div>
                <div class='grid-col grid-col-info'> {{beer.style}} </div>
              </div>

              <div class="grid-row">
                <div class='grid-col grid-col-title'> Hop:  </div>
                <div class='grid-col grid-col-info'> {{beer.hop}} </div>
              </div>

              <div class="grid-row">
                <div class='grid-col grid-col-title'> Yeast: </div>
                <div class='grid-col grid-col-info'> {{beer.yeast}} </div>
              </div>

              <div class="grid-row">
                <div class='grid-col grid-col-title'> Malts: </div>
                <div class='grid-col grid-col-info'> {{beer.malts}} </div>
              </div>
            </div>

          </div>
        </div>
        <button @click='handleBeerBClick' class='beer-block__item beer-button btn'>
          <span> Get new recommendation</span>
        </button>
      </div>
    </div>
    <div class='about'>
      <button class='about_button info-button' :class='{about_button__colored: !showAboutInfo}'
              @click='handleAboutClick'>
        <span>About this app</span>

        <div class='about_info' v-if='showAboutInfo'>
          <p> You want to try some new sort/brand of beer but suffering over choosing one?
            Let this app decide for you!</p>
          <p> Based on info in your profile (after a thorough long analysis) this app will offer the best options. Try new sorts/brand of beer with us. Enjoy!</p>
          <br>
          <p> Hint: you can view your profile by clicking the profile icon.</p>
        </div>
      </button>
    </div>
  </div>

</template>

<script>

export default {
  name: 'VRandomizer',
  props:{
    beer:{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showAboutInfo:false,
      showBeerInfo: false,
      showDetailedInfo: false,
      color: ''
    }
  },
  mounted() {

  },
  methods:{
    handleAboutClick(){
      this.showAboutInfo = !this.showAboutInfo
    },
    handleBeerBClick(){
      this.changeColor()
      if(!this.showBeerInfo){
        this.showBeerInfo = true
        return
      }
      this.$emit('get-new-beer')
    },
    changeColor(){
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.color =  '#'+randomColor
    }
  }
}
</script>

<style scoped lang='scss'>
 @import "src/styles/randomizer";
</style>