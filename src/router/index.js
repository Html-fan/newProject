import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect:"/register",
      name: 'register',
      component: ()=>import("@/components/register/register")
    },
    {
      path: '/index',
      name: 'index',
      component: () => import("@/components/index/index")
    }, {
      path: '/login',
      name: 'login',
      component: () => import("@/components/login/login")
    }
  ]
})
