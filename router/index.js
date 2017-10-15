import Vue from 'vue'
import Router from 'vue-router'
import Create from '../views/Create'
import Get from '../views/Get'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Create,
    },
    {
      path: '/get',
      component: Get,
    },
  ],
})
