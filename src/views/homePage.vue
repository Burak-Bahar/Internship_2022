<template>
  <div> <log-in></log-in></div>
  <br><br>

</template>

<script>
import logIn from "@/components/login";
//import registerHotel from "@/components/registerHotel";
//import logout from "@/components/logout";
//import { mapGetters } from 'vuex'
export default {
  name: "homePage", components:{
    logIn,
    //registerHotel,
   // logout
  },
  data(){
    return{
    }
  },
  methods: {
    hotel(){

      this.$router.push({name: 'loggedIn'})
    }
  }
}
</script>

<style scoped>

</style>