 <template>
<!-- <div>
  <form @submit.prevent>
       <input v-if="reg" placeholder="Name" type="text" v-model="name"> <br>
       <input placeholder="Email" type="email" v-model="email"><br>
       <input placeholder="password" type="password" v-model="password"><br>
        <button type="submit" v-if="!user" @click=" logIn">Submit</button>

  </form>
  <br>
</div>
  <input type="button" @click="reg=true" class="Reg">Register
  <input type="button" @click="reg=false" class="Log_In">Log In
-->
  <div>
    <div class="container" style="margin-top: 100px">
      <div class="row  mt-5">
        <div class="col-md-4 offset-4 card card-primary p-3 border"
             :class="{'border-primary' : reg, 'border-danger' : !reg }">
          <h3
              :class="{'text-primary' : reg, 'text-danger' : !reg }"
              class="text-center mb-3 mt-5">KTB Hotel | Log In</h3>
          <hr>
          <form @submit.prevent>
            <div class="form-group" v-if="reg" :class="{ 'form-group--error': v$.name.$error }">
              <label>Name</label>
              <input v-model.trim="v$.name.$model" type="text" class="form-control" placeholder="Enter Name" >
            <div  v-if="v$.name.$error" >
              <small v-if="v$.name.required.$invalid" class="text-danger">
                Enter Name
              </small>
            </div>
            </div>
            <div class="form-group">
              <label>E-Mail</label>
              <input v-model="v$.email.$model" type="email" class="form-control" >
              <div  v-if="v$.email.$error" >
                <small v-if="v$.email.required.$invalid" class="text-danger">
                  Enter Mail
                </small>
                <small v-if="v$.email.email.$invalid" class="text-danger">
                  Enter Mail
                </small>
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="v$.password.$model" type="password" class="form-control" placeholder="Password..." >
              <div v-if="v$.password.$error">
                <small v-if="v$.password.required.$invalid" class="text-danger">
                  şifre zorunlu
                </small>
                <small v-if="v$.password.minLength.$invalid" class="text-danger">
                  En az 8 karakter

                </small>
              </div>
            </div>
            <div class="button-container flex-column align-items-right">
              <button type="button" style="background: #2c3e50; color: #fff" @click="forgotPassword" >Forgot Password</button>
            </div>
            <br>
            <div class="button-container d-flex  flex-column align-items-center">
              <button type="submit" :class="{'btn-primary' : reg, 'btn-danger' : !reg }"
                      class="btn btn-block mb-2"  @click=" logIn" v-if="!user">
                {{ reg ?  'Kayıt Ol' :  'Giriş Yap'}}
              </button>
              <button  style="background: #2c3e50; color: #fff"  @click.prevent="reg=!reg"  >
                {{ reg ? 'Üyeliğim var' : 'Üye değilim' }}
              </button><br>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import { required, minLength, requiredIf, email } from 'vuelidate/lib/validators'
import {useVuelidate} from "@vuelidate/core";
export default {
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  name: "logIn",
  components:{

  },
  data(){
    return{
      name: '',
      email: "ss_erol122@ktb.gov.tr",
      password: "Lalalups1",
      reg: false,
    }
  },
  validations: {
    name:{
      required : requiredIf(function () {
        return this.reg
      })
    },
    email:{
      required,
      email
    },
    password:{
      required,
      minLength : minLength(8)
    }
  },
  methods:{
    logIn(){
      this.v$.$touch()
      if (!this.v$.$invalid) {
        if (this.reg) {
          this.$store.dispatch('userIdentification_reg', JSON.stringify({
            "name": this.name,
            "email": this.email,
            "password": this.password
          }))
          return
        }
        this.$store.dispatch('userIdentification_log', JSON.stringify({"email": this.email, "password": this.password}))
        //let date = Date.UTC(Date.now().toISOString)

        //this.userIdentification_log(this.email, this.password)
      }
    },
    forgotPassword(){
      this.$router.push({name: 'forgotPassword'})
    }

  },
  computed:{
    ...mapGetters({ user: 'LoggedIn'})
  }
}
</script>

<style scoped>

</style>
<!--
<div>
<div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
  <label class="form__label">Name</label>
  <input class="form__input" v-model.trim="$v.name.$model"/>
</div>
<div class="error" v-if="!$v.name.required">Field is required</div>
<div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
<tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>
<div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
  <label class="form__label">Age</label>
  <input class="form__input" v-model.trim.lazy="$v.age.$model"/>
</div>
<div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
<tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view>
</div>-->