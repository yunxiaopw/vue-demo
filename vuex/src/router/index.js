import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Count from '../components/Count.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',    
    component: () => import('../views/About.vue')
  },
  {
    path:'/count',
    component: Count
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
