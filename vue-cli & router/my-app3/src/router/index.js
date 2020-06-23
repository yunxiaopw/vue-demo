import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/login',
  //   name: 'Login',   
  //   component: () => import('../views/Login.vue')
  // }
]

const router = new VueRouter({
  routes
})

// 模拟登录状态 
const flag = true;
// 全局前置守卫 ,拦截路由的作用
router.beforeEach((to,from,next)=>{
  console.log("开始loading...")
  // 如果登录成功
  if(flag){
    // 继续执行正常跳转
    if(to.name==='Login') next('/')
    else next()
    next()
  }else{
    // 或者跳转到登录页
    if(to.name==='Login') next()
    else next('/login')    
  }
})

// 全局后置钩子
router.afterEach((to,from)=>{
  console.log('关闭loading...')
})

export default router
