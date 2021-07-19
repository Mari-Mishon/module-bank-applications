import Vue from 'vue'
import VueRouter from 'vue-router';

import ApplicationsPage from '@/pages/ApplicationsPage';
import AccountsPage from '@/pages/AccountsPage';
import CurrentApplicationPage from '@/pages/CurrentApplicationPage';
import ApplicationForm from '@/pages/ApplicationForm';
import EditApplicationPage from '@/pages/EditApplicationPage';

Vue.use(VueRouter);

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
      component: AccountsPage
    },
  
    {
      path: '/applications/:id',
      name: 'current_application',
      component: CurrentApplicationPage
    },

    {
        path: '/applications/edit/:id',
        name: 'edit_application',
        component: EditApplicationPage
      },
  ]

  export default new VueRouter({
    routes,
    mode: "history",
  })
  