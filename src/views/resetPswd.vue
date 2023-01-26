<template>
  <div class="container" style="margin-top: 100px">
    <div class="row  mt-5">
      <div class="col-md-4 card card-primary p-3 border">
        <h2 class="text-center mb-3 mt-3">Token</h2>
        <form @submit.prevent>
          <div class="form-group">
            <br><br><br>
            <label>Token</label>
            <input v-model="token" type="text" class="form-control" placeholder="enter token">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="newpassword" type="text" class="form-control" placeholder="New Password">
          </div>
          <div class="button-container d-flex flex-column align-items-center btn-primary">
            <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="resetPassword" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "resetPswd",
  components:{

  },
  data(){
    return{
      token:'',
      newpassword:''
    }
  },
  methods:{
    resetPassword(){
      this.$store.dispatch('reset_password', JSON.stringify({ "token": this.token,"password": this.newpassword}))
    }
  }
}
</script>

<style scoped>

</style>