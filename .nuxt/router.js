import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d443c07 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1c6f9356 = () => interopDefault(import('../pages/index.og.vue' /* webpackChunkName: "pages/index.og" */))
const _a331fc42 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _c74c80a4 = () => interopDefault(import('../pages/uses.vue' /* webpackChunkName: "pages/uses" */))
const _0b8d9abf = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _a929b740 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _0d443c07,
    name: "blog"
  }, {
    path: "/index.og",
    component: _1c6f9356,
    name: "index.og"
  }, {
    path: "/projects",
    component: _a331fc42,
    name: "projects"
  }, {
    path: "/uses",
    component: _c74c80a4,
    name: "uses"
  }, {
    path: "/blog/:slug",
    component: _0b8d9abf,
    name: "blog-slug"
  }, {
    path: "/",
    component: _a929b740,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
