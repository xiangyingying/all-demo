import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '../views/Read.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/read',
    name: 'read',
    component: Read
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/Movie.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/Music.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/My.vue')
  },
  {
    path: '/readDetail',
    name: 'readDetail',
    component: () => import('../views/ReadDetail.vue')
  },
  {
    path: '/movieMore',
    name: 'movieMore',
    component: () => import('../views/MovieMore.vue')
  },
  {
    path: '/movieDetail',
    name: 'movieDetail',
    component: () => import('../views/Moviedetail.vue')
  },
  {
    path: '/musicMore',
    name: 'musicMore',
    component: () => import('../views/MusicMore.vue')
  },
  {
    path: '/musicList',
    name: 'musicList',
    component: () => import('../views/MusicList.vue')
  },
  {
    path: '/musicPlay',
    name: 'musicPlay',
    component: () => import('../views/MusicPlay.vue')
  },
  {
    path:"/",
    redirect:"/read"
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
