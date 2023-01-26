<template>
  <div class="container" style="margin-top: 100px">
    <div class="row  mt-5">
      <div class="col-md-4 card card-primary p-3 border">
        <h2 class="text-center mb-3 mt-3">Search Hotel</h2>
        <form @submit.prevent>
          <div class="form-group">
            <br><br><br>
            <label>Hotel</label>
            <input placeholder="Id" type="text" v-model="id" class="form-control" required> <br>
          </div>
          <div class="button-container d-flex  flex-column align-items-center">
            <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="searchHotel">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="button-container d-flex  flex-column align-items-center" v-if="this.$store.state.hotelFound">
      <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="update_Hotel">
        Update Hotel
      </button>
  </div>

  </div>
</template>

<script>
//import toHome from "@/components/toHome";
export default {
  name: "HotelbyId",
  components:{
    //toHome
  },
  data(){
    return{
      id:""
    }
  },methods:{
    searchHotel(){
      this.$store.dispatch('getHotel', this.id)
    },
    update_Hotel(){
      this.$router.push({name : 'updateHotel'})
    },

  }
}
</script>

<style scoped>

</style>