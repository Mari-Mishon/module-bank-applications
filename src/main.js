import Vue from 'vue';
import App from './App';

import axios from "axios";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import UUID from "vue-uuid";


axios.defaults.baseURL = `https://my-json-server.typicode.com/plushevy/demo`

Vue.use(UUID); 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
