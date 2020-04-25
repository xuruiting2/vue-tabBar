import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('../pages/home/Home.vue')
const Our = ()=> import('../pages/our/Our.vue')
const Type = ()=> import('../pages/type/Type.vue')
const Car = ()=> import('../pages/car/Car.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect:'/home'
    },
    {
      path:"/home",
     component:Home
    },
    {
      path:"/car",
     component:Car
    },
    {
      path:"/type",
     component:Type
    },
    {
      path:"/our",
     component:Our
    }
  ],
  mode:'history'
})
