<template>
  <nav class="sidebar bg-dark">
    <div class="container ">

      <div class="bar collapse navbar-collapse" id="navbarSupportedContent">
        <ul>
          <li  @click="HomePage" class="list-group-item-primary list-group-item-action py-3 ripple" aria-current="true" style="cursor: pointer">
            Home
          </li>
        </ul>
        <ul>
          <li  @click="register_Hotel" class="list-group-item list-group-item-action py-3 ripple" aria-current="true" style="cursor: pointer;">
            Register Hotel
          </li>
          <li @click="search_Hotel" class="list-group-item list-group-item-action py-3 ripple" aria-current="true" style="cursor: pointer">
            List Hotel
          </li>
          <li @click="get_Hotel" class="list-group-item list-group-item-action py-3 ripple" aria-current="true" style="cursor: pointer">
            Search Hotel
          </li>
          <li @click="ResetPassword" class="list-group-item list-group-item-action py-3 ripple" aria-current="true" style="cursor: pointer">
            Reset Password
          </li>
          <li  @click="LogOut" class="list-group-item list-group-item-action py-3 ripple" aria-current="true" style="cursor: pointer">
            Log Out
        </li>
        </ul>
    </div>
    </div>
  </nav>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "navBar",
  data(){
    return{
      User: false
    }
  },
  methods: {
    HomePage() {
      this.$store.state.hotelList = []
      this.$store.state.hotelFound = false
      this.$router.push({name: 'loggedIn'})
    },
    ResetPassword(){
      this.$router.push({name : "resetPswd"})
    },
    register_Hotel(){
      this.$router.push({name : "registerHotel"})
    },
    search_Hotel(){
      this.$router.push({name : "getAllHotels"})
    },
    get_Hotel(){
      this.$router.push({name : "getHotel"})
    },
    LogOut(){
      let text = "Are You Sure?";
      if (confirm(text) === true) {
        this.$store.dispatch('logOut')
      }
    }
  },
  computed:{
    ...mapGetters({admin: 'IsAdmin'})
  },
  created() {
    if(sessionStorage.length>0){
      this.User = true
    }
  }
}
</script>

<style scoped>
.bar{
  width: 20%;
}
.list-group-item:hover{
  background: aquamarine;
}
body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
ul{

  padding-inline-start: 0;
}
</style>