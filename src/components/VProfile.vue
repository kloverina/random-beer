<template>
  <section class='v-profile profile'>
    <div class='profile_line'>
      <div class='profile__item profile__item__1fr profile-photo'>
          <img :src='user.avatar'  alt='avatar'>
      </div>
      <div class='profile__item profile__item__3fr'>
        <div class='profile-info'>
          <p class='profile-info__item item item__name'>
            <span class='name'>{{user.first_name}} {{user.last_name}}</span>
            <span class='username'> @{{user.username}}</span>
          </p>

          <p class='profile-info__item item'>
            {{this.currentAge}} years old
          </p>
          <p class='profile-info__item item'>
            <span>{{user.employment.title}}</span>
          </p>
        </div>

      </div>

      <div class='profile_additional-info profile__item'>
        <h3> General: </h3>
        <div class='profile-info'>
          <p class='profile-info__item'>
            <span>Location: </span>
            <span>{{ address }}</span>
          </p>
          <p class='profile-info__item'>
            <span>Gender: </span>
            <span>{{user.gender}}</span>
          </p>

        </div>
      </div>

      <div class='profile_additional-info profile__item'>
        <h3 class='profile-header'> Additional info: </h3>
        <div class='profile-info'>
          <p class='profile-info__item'>
            <span>Email: </span>
            <span>{{user.email}}</span>
          </p>
          <p class='profile-info__item'>
            <span>Phone: </span>
            <span>{{user.phone_number}}</span>
          </p>

        </div>
      </div>
      </div>

    <div class='button-section'>
      <span> {{ message}} </span>
      <button class='btn' @click='updateUser' :class="{ not_active: isButtonBlocked}">
        It is not me!
      </button>
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
    return{
      showMessage: false,
      counter: 0,
      MessageBox: [
        "Better now?",
        "Satisfied already?",
        'Really?..',
        'This button will rest a bit. You should too.'
      ],
      isButtonBlocked: false
    }
  },
  computed:{
    currentAge: function() {
      let birthYear = new Date(this.user.date_of_birth).getFullYear()
      let curentYear = new Date().getFullYear()
      return curentYear - birthYear
    },
    message: function() {
      if (this.counter > 0){
        return this.MessageBox[this.counter - 1]
      }
      return ""
    },
    address: function() {
      let temp = this.user.address
      return temp.city + ', '+temp.state +', ' + temp.country
    }
  },
  methods:{
    updateUser(){
      if (this.isButtonBlocked) return
      this.counter++
      if (this.counter === this.MessageBox.length)
        this.isButtonBlocked = true
      this.showMessage = true
      this.$emit('update-user-profile')
    }

  }
}
</script>

<style lang='scss' scoped>
 @import "../styles/profile";
</style>