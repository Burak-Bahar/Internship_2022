<template>
  <nav-bar v-if="currentRouteName !== 'homepage' " style="border-color: black"></nav-bar>
  <div class="visual">  <router-view style="margin: auto 100px auto 600px"></router-view></div>

</template>

<script>
//import logout from "@/components/logout";
import navBar from "@/components/navBar";
export default {
  name: 'App',
  components: {
    //logout,
    navBar
  },computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
