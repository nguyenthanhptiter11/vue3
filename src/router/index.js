const Vue = window.Vue
import Router from 'vue-router'
import Meta from 'vue-meta'

// Routes
import paths from './paths'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  // base: '/home/',
  routes: paths
})

router.afterEach((to, from) => {
  if (from['name'] === null) {
    setTimeout(() => {
      const loadingMark = document.getElementById('loading__mark')
      loadingMark.style.opacity = 0
      loadingMark.style.zIndex = -1
    }, 200);
  }
})  

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (requiresAuth && (isAuthenticated === 'false')) {
    
    next('/unlock')

  } else {

    setTimeout(() => {
      next()
    }, 0);

  }
  
})

/* eslint-disable */
export default router
