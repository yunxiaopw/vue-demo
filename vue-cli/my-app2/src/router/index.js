import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)  //初始化router

  const routes = [
  {
    path: '/',
    name: 'Home',    //别名
    component: Home
  },
  {
    path: '/user/:id',
    name: 'User',    //别名
    component: User
  },
  {
    path: '/about',
    name: 'About',  
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
