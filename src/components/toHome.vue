<template>
  <div class="button-container d-flex  flex-column align-items-center">
    <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="HomePage">
      Home Page
    </button>
  </div>
</template>

<script>
export default {
  name: "toHome",
  methods:{
    HomePage(){
      this.$store.state.hotelList = []
      this.$store.state.hotelFound = false
      this.$router.push({name: 'loggedIn'})
    }
  }
}
</script>

<style scoped>

</style>