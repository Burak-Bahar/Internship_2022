<template>
  <div class="container" style="margin-top: 100px">
    <div class="row  mt-5">
      <div class="col-md-4 card card-primary p-3 border">
        <h2 class="text-center mb-3 mt-3">Trouble Logging In</h2>
        <form @submit.prevent>
          <div class="form-group">
            <br><br><br>
            <label>Email</label>
            <input v-model="email" type="email" class="form-control"
                   placeholder="Enter mail">
          </div>
          <div class="button-container d-flex flex-column align-items-center btn-primary">
            <button type="submit" class="btn btn-block mb-2 btn-primary"  @click="forgotPassword" >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "forgotPassword",
  data(){
    return{
      email: '',
      token:''
    }
  },components:{


  },
  methods:{
    forgotPassword(){
      this.$store.dispatch('forgot_password', this.email)
    },

  }
}
</script>

<style scoped>

</style>