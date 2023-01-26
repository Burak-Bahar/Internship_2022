<template>
    <div class="container" >
      <div class="card-columns"   style="margin-top: 50px">
      <div v-for=" hotel in hotels" :key="hotel.id" style="cursor: pointer">
        <div class="card">
        <hotel-card :hotelInformation='hotel'></hotel-card>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import hotelCard from "@/components/hotelCard";
import {mapState} from "vuex";
export default {
  name: "displaySearchedHotels",
  components:{
    hotelCard
  },
  computed:{
    ...mapState({
      hotels : "hotelList",
    })
  },
  methods:{
    /*backToSearch(){
      this.$router.push({name : "getAllHotels"})
    }*/
    /*hotel_info(hotelId){
      this.$router.push({name: '', params:{id : hotelId}})
    }*/
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: none;}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
}
</style>