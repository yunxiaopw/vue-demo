import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserPosts from '../views/user/UserPosts.vue'
import SideBar from '../views/SideBar.vue'
import Footer from '../views/Footer.vue'

Vue.use(VueRouter)  //初始化router

  const routes = [
  {
    path: '/',
    name: 'Home',    //别名
    props: {
      default : {
        data : '列表'
      }
    },
    components: {
      default: Home,
      sidebar: SideBar,
      footer: Footer
    }
  },
  {
    path: '/a',
    // redirect: '/about'
    // redirect: {
    //   name: 'About'
    // }
    redirect: (to)=>{
      console.log(to)
      if(true){
        // return '/about'
        return {
          name: 'About'
        }
      }
    }
  },
  {
    path: '/user/:id',
    name: 'User',    //别名
    props:true,
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      },
      {
        path: '*',
        component: Home
      },
    ]
  },
  {
    path: '/about',
    name: 'About',  
    components: {
      default: () => import('../views/About.vue'),
      sidebar: SideBar,
      footer: Footer
    }  
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
