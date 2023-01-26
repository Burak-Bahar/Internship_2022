<template>
  <div class="container" style="margin-top: 100px">
    <div class="row  mt-5">
      <div class="col-md-4 offset-4 card card-primary p-3 border">
        <h2 class="text-center mb-3 mt-3">Update Hotel</h2>
        <form @submit.prevent>
          <div v-if="found">
            <div class="form-group">
              <br>
              <label>Hotel Name</label>
              <input placeholder="Name" type="text" v-model="hotel.name" class="form-control"> <br>
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea placeholder="Description" type="text" v-model="hotel.description" class="form-control"></textarea>
            </div>
            <div class="form-group">
              <label>Location</label>
              <input placeholder="location" type="text" v-model="hotel.location" class="form-control"><br>
            </div>
            <div class="form-group">
              <label>checkInTime</label>
              <input placeholder="check In" type="time" v-model="hotel.checkInTime" class="form-control"><br>
            </div>
            <div class="form-group">
              <label>checkOutTime</label>
              <input placeholder="check Out" type="time" v-model="hotel.checkOutTime" class="form-control"><br><br>
            </div>
            <div class="form-group">
              <label>Features</label>
              <input placeholder="features" type="text" v-model="feat" class="form-control"><br>
            </div>
            <div class="button-container d-flex  flex-column align-items-center">
              <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="UpDateHotel">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>

</template>

<script>
//import toHome from "@/components/toHome";
import { mapState } from 'vuex'
export default {
  name: "update_hotel",
  components:{
   // toHome
  },
  data(){
    return{
      feat: '',
    }
  },
  methods:{
    UpDateHotel(){
      this.hotel.features = this.feat.split(',')
      this.$store.dispatch('updateHotel', this.hotel)
      this.$store.commit('HotelData', this.hotel)
      this.backToInfo()
    },
    backToInfo(){
      this.$router.push({name: 'hotelInfoPage', params:{id : this.hotel.id}})
    }
  },
  computed:{
    ...mapState( {found : "hotelFound",
                  hotel: "hotel"
    })
  },
  created() {
    this.$store.dispatch('getHotel', this.hotel.id)

    this.feat = this.hotel.features.join(',')
    console.log(this.feat)
  }

}
</script>

<style scoped>

</style>