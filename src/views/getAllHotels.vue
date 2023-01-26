<template>
  <div class="container" style="margin-top: 100px">
    <div class="row  mt-5">
      <div class="col-md-4 offset-4 card card-primary p-3 border">
        <h2 class="text-center mb-3 mt-3">Get Hotel</h2>
        <form @submit.prevent>
          <div class="form-group">
            <br><br><br>
            <label>Hotel Name</label>
            <input type="text" v-model="descriptionHotel.hotel_name" placeholder="name" class="form-control"><br>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" v-model="descriptionHotel.hotel_des" placeholder="description"  class="form-control"></textarea><br>
          </div>
          <div class="form-group">
            <label>Location</label>
            <input type="text" v-model="descriptionHotel.hotel_loc" placeholder="location" class="form-control"><br>
          </div>
          <div class="form-group">
            <label>Sort By</label>
            <input type="text" v-model="descriptionHotel.sortBy" placeholder="sortby" class="form-control"><br>
          </div>
          <div class="form-group">
            <label>Entry Per Page </label>
            <input type="number" v-model="descriptionHotel.limit" placeholder="entry per page" class="form-control"><br>
          </div>
          <div class="form-group">
            <label>Page</label>
            <input type="number" v-model="descriptionHotel.page" placeholder="page count" class="form-control"><br>
          </div>
          <div class="button-container d-flex  flex-column align-items-center">
            <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="GetHotelList">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
//import toHome from "@/components/toHome";
//import hotelCard from "@/components/hotelCard";
export default {
  name: "getAllHotels",
  components:{
   // toHome
  },
  data(){
    return{
      descriptionHotel:[{
        hotel_name: "",
        hotel_des: "",
        hotel_loc:"",
        sortBy : "",
        limit: "",
        page: ""
      }
      ]
    }
  },
  methods:{
    GetHotelList(){
      console.log(this.descriptionHotel)
      this.$store.dispatch('getHotelList', this.descriptionHotel)
    }
  }
}
</script>

<style scoped>

</style>