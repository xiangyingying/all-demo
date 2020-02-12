import Vue from 'vue'
import VueRouter from 'vue-router'
import Candy from '../views/Candy.vue'
import Detail from '../views/Detail.vue'
import axios from 'axios';
Vue.prototype.axios=axios
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'candy',
    component: Candy
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/search',
    name: 'search',
    component:()=>import('@/views/Search.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
