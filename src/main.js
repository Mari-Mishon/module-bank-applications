import Vue from 'vue'
import App from './App'

import ApplicationsPage from '@/pages/ApplicationsPage';
import Accounts from '@/pages/Accounts';
import CurrentApplicationPage from '@/pages/CurrentApplicationPage';
import ApplicationForm from '@/pages/ApplicationForm';

import axios from "axios";
import store from "./store"
import VueRouter from 'vue-router';

Vue.use(VueRouter);
axios.defaults.baseURL = `https://my-json-server.typicode.com/plushevy/demo`


const routes = [
  {
    path: '/',
    name:'main_page',
    component: ApplicationsPage
  },

  {
    path: '/new_application',
    name: 'new_application',
    component: ApplicationForm
  },
 
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts
  },

  {
    path: '/applications/:id',
    name: 'current_application',
    component: CurrentApplicationPage
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
