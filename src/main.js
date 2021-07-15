import Vue from 'vue'
import App from './App'

import Main from '@/pages/Main';
import ApplicationsPage from '@/pages/ApplicationsPage';
import Accounts from '@/pages/Accounts';
import CurrentApplicationPage from '@/pages/CurrentApplicationPage';
import axios from "axios";

import VueRouter from 'vue-router';

Vue.use(VueRouter);
axios.defaults.baseURL = `https://my-json-server.typicode.com/plushevy/demo`


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/applications',
    component: ApplicationsPage
  },
  {
    path: '/accounts',
    component: Accounts
  },
  {
    path: '/applications/:id',
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
  // store,
  render: h => h(App)
}).$mount('#app')
