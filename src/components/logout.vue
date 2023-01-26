<template>
  <div class="button-container d-flex  flex-column align-items-center">
    <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="LogOut">
      Log out
    </button>
  </div>
</template>

<script>
export default {
  name: "logOut",
  methods:{
    LogOut(){
      let text = "Are You Sure?";
      if (confirm(text) === true) {
        this.$store.dispatch('logOut')
      }
    }
  }
}
</script>

<style scoped>

</style>