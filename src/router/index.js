import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../views/movie'
import MovieList from '../views/movie-list'
import MovieDetail from '../views/movie-detail'
import MovieSearch from '../views/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Movie
    },
    {
      path: '/movie/list',
      name: 'movie-list',
      component: MovieList
    },
    {
      path: '/movie/subject/:id',
      name: 'movie-detail',
      component: MovieDetail
    },
    {
      path: '/movie/search',
      name: 'movie-search',
      component: MovieSearch
    }
  ]
})
