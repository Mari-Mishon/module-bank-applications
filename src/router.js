import Vue from 'vue'
import VueRouter from 'vue-router';

import ApplicationsPage from '@/pages/ApplicationsPage';
import AccountsPage from '@/pages/AccountsPage';
import CurrentApplicationPage from '@/pages/CurrentApplicationPage';
import ApplicationFormPage from '@/pages/ApplicationFormPage';
import EditApplicationPage from '@/pages/EditApplicationPage';
import NotFound from '@/components/NotFound';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main_page',
    component: ApplicationsPage
  },

  {
    path: '/new_application',
    name: 'new_application',
    component: ApplicationFormPage
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

  {
    path: '/404',
    name: '404',
    component: NotFound,
  }, {
    path: '*',
    redirect: '/404'
  },

]

export default new VueRouter({
  routes,
  mode: "history",
})
