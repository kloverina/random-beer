import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Randomizer',
    component: () => import('@/views/VRandomizer.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/VProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

export default router
