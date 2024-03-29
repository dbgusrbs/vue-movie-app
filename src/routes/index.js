import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFount from './NotFound.vue'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFount
    }
  ]
})