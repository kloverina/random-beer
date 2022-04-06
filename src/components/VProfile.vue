<template>
  <section class='v-profile profile'>
    <div class='profile_line'>
      <div class='profile__item profile__item__1fr profile-photo'>
          <img :src='user.avatar'  alt='avatar'>
      </div>
      <div class='profile__item profile__item__3fr'>
        <div class='profile-info'>
          <p class='profile-info__item item item__name'>
            {{user.first_name}} {{user.last_name}}
          </p>

          <p class='profile-info__item item'>
            {{this.currentAge}} years old
          </p>
        </div>

      </div>
      </div>
    <div class='profile_additional-info'>
      <h5 class='profile-header'> Additional info: </h5>
      <div class='profile_line'>
        <div class='profile-info'>

          <p class='profile-info__item'>
            <span>Email: </span>
            <span>{{user.email}}</span>
          </p>
          <p class='profile-info__item'>
            <span>Phone: </span>
            <span>{{user.phone_number}}</span>
          </p>
          <p class='profile-info__item'>
            <span> Position: </span>
            <span>{{user.employment.title}}</span>
          </p>
        </div>


      </div>
    </div>
    <div class='button-section'>
      <button> It is not me! </button>
    </div>
  </section>

</template>

<script>

export default {
  name: 'VProfile',
  props: {
    user:{
      type: Object,
      required: true
    }
  },
  data() {
    return{}
  },
  computed:{
    currentAge: function() {
      let birthYear = new Date(this.user.date_of_birth).getFullYear()
      let curentYear = new Date().getFullYear()
      return curentYear - birthYear
    }
  },
  methods:{

  }
}
</script>

<style lang='scss' scoped>
 @import "../styles/profile";
</style>