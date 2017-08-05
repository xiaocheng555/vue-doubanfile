<template>
  <article>
    <Spinner :show="!movie_in_theaters.title"></Spinner>

    <section class="showing" v-if="movie_in_theaters.title">
      <GridTitle
        :title="movie_in_theaters.title"
        :moreURL="{ name: 'movie-list', query: {'type': 'in_theaters'} }"
      ></GridTitle>
      <Grid :movies="movie_in_theaters.movies"></Grid>
    </section>

    <section class="coming" v-if="movie_coming_soon.title">
      <GridTitle
        :title="movie_coming_soon.title"
        :moreURL="{ name: 'movie-list', query: {'type': 'coming_soon'} }"
      >
      </GridTitle>
      <Grid :movies="movie_coming_soon.movies"></Grid>
    </section>
  </article>
</template>

<script>
import GridTitle from '../components/GridTitle'
import Grid from '../components/Grid'
import Spinner from '../components/Spinner'
import { API_TYPE, fetchMovies } from '../api/api'

export default {
  components: {
    GridTitle,
    Grid,
    Spinner
  },
  data () {
    return {
      busy: false,
      movie_in_theaters: {
        title: '',
        movies: []
      },
      movie_coming_soon: {
        title: '',
        movies: []
      }
    }
  },
  mounted () {
    const promise1 = fetchMovies(API_TYPE.movie.in_theaters, 0, 9).then((response) => {
      this.movie_in_theaters.title = response.title
      this.movie_in_theaters.movies = response.subjects
    })
    Promise.all([promise1])
      .then(() => {
        fetchMovies(API_TYPE.movie.coming_soon, 0, 9).then((response) => {
          this.movie_coming_soon.title = response.title
          this.movie_coming_soon.movies = response.subjects
          console.log({response})
        })
      })
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .showing, .coming {
    margin: 0 auto;
    max-width: 630px;
  }
</style>
