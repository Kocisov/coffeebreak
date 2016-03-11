export function configRouter (router) {
  router.map({
    '/home': {
      component: require('./components/Home.vue')
    },
    '/create': {
      component: require('./components/Create.vue')
    },
    '/get': {
      component: require('./components/Get.vue')
    },
    '*': {
      component: require('./components/NotFound.vue')
    }
  })
  router.redirect({
    '/': '/home'
  })
}
