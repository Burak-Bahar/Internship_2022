<template>
  <div class="container" style="margin-top: 100px">
    <div class="row  mt-5">
      <div class="col-md-4 card card-primary p-3 border">
        <h2 class="text-center mb-3 mt-3">Register Hotel</h2>
        <form @submit="saveHotel">
          <div class="form-group" >
            <br><br><br>
            <label>Hotel Name</label>
            <input placeholder="Name" type="text" v-model="v$.hotel.name.$model"  class="form-control" >
            <div  v-if="v$.hotel.name.$error" >
              <small v-if="v$.hotel.name.required.$invalid" class="text-danger">
                Hotel İsmi Giriniz
              </small>
            </div>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea placeholder="Description" type="text" v-model.trim="hotel.description" class="form-control" required></textarea>
          </div>
          <div class="form-group">
            <label>Location</label>
            <input placeholder="location" type="text" v-model="hotel.location" class="form-control" required><br>
          </div>
          <div class="form-group">
            <label>Check In Time</label>
            <input placeholder="check In" type="time" v-model="hotel.checkInTime" class="form-control" required /><br>
          </div>
          <div class="form-group">
            <label>Check Out Time</label>
            <input placeholder="check Out" type="time" v-model="hotel.checkOutTime" class="form-control" required><br><br>
          </div>
          <div class="form-group">
            <label>Features</label>
            <input placeholder="features" type="text" v-model.trim="feat" class="form-control"><br>
          </div>
          <div class="button-container d-flex  flex-column align-items-center">
            <button type="submit" class="btn btn-block mb-2 btn-primary"  >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--<div >
    <form @submit.prevent>

      <input placeholder="check In" type="text" v-model="hotel.checkInTime" class="form-control"><br>
      <input placeholder="check Out" type="text" v-model="hotel.checkOutTime" class="form-control"><br>
      <input placeholder="features" type="text" v-model="feat" class="form-control"><br>
      <button type="submit" @click="saveHotel" >Submit</button>

    </form>
    <br>
  </div> -->

</template>

<script>
//import toHome from "@/components/toHome";
import { required } from 'vuelidate/lib/validators'
import {useVuelidate} from "@vuelidate/core";
export default {
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  name: "registerHotel",
  components:{
    //toHome
  },
  data(){
    return{
      feat: '',
      hotel:
          {
            name: "",
            description: "",
            location: "",
            checkInTime: "",
            checkOutTime: "",
            features: []
          }
    }
  },
  validations:{
    hotel:{
      name:{
        required
      },
      description: {

      },
      location: {

      }
    }

  },
  methods:{
    saveHotel(){

      if(this.hotel.name !== "" && this.hotel.location !== "" && this.hotel.checkInTime !== "" && this.hotel.checkOutTime !== ""){
        this.hotel.features = this.feat.split(',')
        console.log(this.hotel.features)
        this.$store.dispatch('registerHotel', JSON.stringify(this.hotel))
      }
      else{
        alert("Fill the required Fields (Name, Location, Check In and Out Times)")
      }

    }
  }
}
</script>

<style scoped>

</style>