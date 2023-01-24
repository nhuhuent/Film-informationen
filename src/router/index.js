import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmeView from '../views/FilmeView.vue'
import SiereView from '../views/SerieView.vue'
import MovieDetail from '../views/MovieDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/filme',
    name: 'filme',
    component: FilmeView
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  },
  {
    path: '/serie',
    name: 'serie',
    component: SiereView
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
