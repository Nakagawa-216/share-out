import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f2ae387 = () => interopDefault(import('../pages/App.vue' /* webpackChunkName: "pages/App" */))
const _37fdf118 = () => interopDefault(import('../pages/HomePage.vue' /* webpackChunkName: "pages/HomePage" */))
const _6f14d94f = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _803f84bc = () => interopDefault(import('../pages/Signup.vue' /* webpackChunkName: "pages/Signup" */))
const _2add09c5 = () => interopDefault(import('../pages/user/MyPage.vue' /* webpackChunkName: "pages/user/MyPage" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/App",
    component: _0f2ae387,
    name: "App"
  }, {
    path: "/HomePage",
    component: _37fdf118,
    name: "HomePage"
  }, {
    path: "/Login",
    component: _6f14d94f,
    name: "Login"
  }, {
    path: "/Signup",
    component: _803f84bc,
    name: "Signup"
  }, {
    path: "/user/MyPage",
    component: _2add09c5,
    name: "user-MyPage"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
