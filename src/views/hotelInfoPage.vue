<template>
  <div class="container" style="margin-top: 100px">
    <div class="row  mt-5">
      <div class="col-md-4 card card-primary p-3 border">
        <h2 class="text-center mb-3 mt-3">{{ hotel.name.toUpperCase() }}</h2><br><br><br>
          <div>
            <div class="form-group">
            <label>LOCATION</label>
            <p  type="text" >{{ hotel.location.toUpperCase()}}</p><br>
            </div>
            <div class="form-group">
              <label>DESCRIPTION</label>
              <p  type="text" style="font-size: 15px">{{ hotel.description}}</p>
            </div>
            <div class="form-group">
              <label>CHECK IN TIME</label>
              <p  type="text" >{{hotel.checkInTime}}</p><br>
            </div>
            <div class="form-group">
              <label>CHECK OUT TIME</label>
              <p type="text" >{{hotel.checkOutTime}}</p><br><br>
            </div>
            <div class="form-group">
              <label>FEATURES</label>
              <p  type="text"  >{{hotel.features}}</p><br>
            </div>
            <div class="button-container d-flex  flex-column align-items-center">
          </div>
      </div>
        <div class="button-container d-flex  flex-column align-items-center" v-if="admin">
          <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="UpdatePage">
            Update
          </button>
        </div>
        <delete_hotel :hotel-id="hotel.id"></delete_hotel>
    </div>
    </div>
  </div>
</template>

<script>
//import toHome from "@/components/toHome";
import delete_hotel from "@/components/delete_hotel";
export default {
  name: "hotelInfoPage",
  components:{
    //toHome,
    delete_hotel
  },
  data(){
    return{
      hotel:{
        id:String,
        name: String,
        description: String,
        location: String,
        checkInTime: String,
        checkOutTime: String,
        features: []
      },
      admin: false
    }
  },
  created() {
    const {id:hotelId} = this.$route.params;
    if(this.$store.state.hotel.id === hotelId){
      this.hotel = this.$store.state.hotel
    }
    else{
      this.hotel = this.$store.state.hotelList.find(hotel=> hotel.id === hotelId);
    }
    let y = sessionStorage.getItem('user')
    y = JSON.parse(y)
    if (y.user.role === 'admin'){
      this.admin = true
    }
  },
  methods:{
    UpdatePage(){
      this.$store.commit('HotelData', this.hotel)
      this.$router.push({name : 'updateHotel'})
    }

  }
}
</script>

<style scoped>

</style>