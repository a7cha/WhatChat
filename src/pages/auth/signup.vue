<template>
  <f7-page name="Signup">
    <f7-navbar title="Signup" back-link="Back"></f7-navbar>

      <div class="wrapper">
        <img class="image--cover" :src="image_url" alt='avatar'>
      </div>

      <f7-list no-hairlines-md>

        <f7-list-input
          :value="name"
          @input="name=$event.target.value"
          label="Name"
          type="text"
          placeholder="Your Name"
          clear-button
        >
        </f7-list-input>        

        <f7-list-input
          :value="email"
          @input="email=$event.target.value"
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          clear-button
        >
        </f7-list-input>

        <f7-list-input
          :value="password"
          @input="password=$event.target.value"        
          label="Password"
          type="password"
          placeholder="Your password"
          clear-button
        >
        </f7-list-input>

      </f7-list>

      <f7-block>

        <f7-button outline @click="signUp">Signup</f7-button>
        
      </f7-block>

  </f7-page>
</template>
<script>
  export default{
    data(){
      return{
        name : null,
        email:null,
        password:null,
        image_url : 'https://trello-attachments.s3.amazonaws.com/5fbaad0aa62b6b0adf50f90e/5fbe7fc0a1b4785c81738b75/65c7e12549baaded32274744f216fa9a/PinClipart.com_playing-video-games-black_1486972.png'
      }
    },
    computed : {
      alert_message(){
          return this.$store.getters.alert_message
      }
    },
    watch : {
      alert_message(value){
        const self = this
        this.showToastBottom(value)
        setTimeout(() => {
          self.$store.commit('setAlertMessage', null)
        }, 200)
      }
    },
    methods : {
      signUp(){
          const self = this
          var payload = {}
          payload.name = this.name
          payload.email = this.email
          payload.password = this.password
          payload.photoURL = this.image_url
        this.$store.dispatch('signUp', payload)
      },
      showToastBottom(text) {
        const self = this;
        // Create toast
        if (!self.toastBottom || self.toastBottom.destroyed) {
          self.toastBottom = self.$f7.toast.create({
            text: text,
            closeTimeout: 2000,
            destroyOnClose:true
          });
        }
        // Open it
        self.toastBottom.open();
      },      
    }
  }
</script>

<style scoped>
.wrapper{
  text-align: center;
}

.image--cover{
  width: 150px;
  height : 150px;
  border-radius : 50%;
  margin : 20px;
  object-fit: cover;
  object-position : center;
}
</style>



