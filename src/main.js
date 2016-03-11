import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './routes'
require('es6-promise').polyfill()

Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  abstract: false // electron routing [true]
})
configRouter(router)

const App = Vue.extend(require('./App'))
router.start(App, '#app')
