<template>
    <img @click="hotel_info" class="card-img-top" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/241278020.jpg?k=12c938d831bde550c37f79efa9652fcd3c30610565a1b6ccaa168ac305b69f21&o=&hp=1" alt="">
    <div class="card-body" >
      <div @click="hotel_info">
      <h5 class="card-title">{{hotelInformation.name.toUpperCase() }}</h5>
        <br>
      <p class="card-text">
        {{ hotelInformation.location }}
        <br>
        <br>
        {{ hotelInformation.description }}
      </p>
        <br>

      </div>
      <div class="button-container d-flex  flex-column align-items-center" v-if="admin">
        <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="UpdatePage">
          Update
        </button>
      </div>
      <div><delete_hotel :hotel-id="hotelInformation.id"></delete_hotel></div>
    </div>
</template>

<script>
//import {mapState} from "vuex";
import delete_hotel from "@/components/delete_hotel";
export default {
  name: "hotelCard",
  components:{
    delete_hotel
  },
  data(){
    return{
      admin : false
    }
  },
  props:{
    hotelInformation:{
      id:String,
      name: String,
      description: String,
      location: String,
      checkInTime: String,
      checkOutTime: String,
      features: []
    }
  },
  methods:{
    hotel_info(){
      this.$router.push({name: 'hotelInfoPage', params:{id : this.hotelInformation.id}})

    },UpdatePage(){
      this.$store.commit('HotelData', this.hotelInformation)
      this.$router.push({name : 'updateHotel'})
    }

  },
  created() {
    let y = sessionStorage.getItem('user')
    y = JSON.parse(y)
    if (y.user.role === 'admin'){
      this.admin = true
    }
  }

}
</script>

<style scoped>
br{
  background-color: #2c3e50;
}
body {
  background: #232321;
}
h1 {
  color: #fff;
  padding: 10px 0;
}
h5{
  font-size: 20px;
}
p{
  font-size: 16px;
}
.card-text:first-letter{
  text-transform: capitalize;
}
a {
  color: initial;}
a:hover {
   text-decoration: initial;
 }

.text-muted i {
  margin: 0 10px;
}


</style>