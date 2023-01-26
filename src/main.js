import { createApp } from 'vue'
import App from './App.vue'
import Store from "@/store/store";
import {router} from "@/router/router";
import Vuelidate from "@vuelidate/core";
createApp(App).use(Vuelidate).use(Store).use(router).mount('#app')
