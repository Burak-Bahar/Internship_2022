<template>

<div v-if="admin">

  <!--<div class="button-container d-flex  flex-column align-items-center">
    <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="update_Hotel">
      Update Hotel
    </button>
  </div>-->
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
//import navBar from "@/components/navBar";
export default {
  name: "loggedIn",
  components:{
//navBar
  },
  data(){
    return{
    }
  },
  methods:{
    ResetPassword(){
      this.$router.push({name : "resetPswd"})
    },
    register_Hotel(){
      this.$router.push({name : "registerHotel"})
    },
    search_Hotel(){
      this.$router.push({name : "getAllHotels"})
    },
    get_Hotel(){
      this.$router.push({name : "getHotel"})
    }
  },
  computed:{
    ...mapGetters({admin: 'IsAdmin'})
  }
}
</script>

<style scoped>

</style>