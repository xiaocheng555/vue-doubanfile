<template>
  <article v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <Spinner :show="loading"></Spinner>

    <section v-if="movieList.title">
      <GridTitle
        :title="movieList.title">
      </GridTitle>
      <Grid :movies="movieList.movies"></Grid>
      <p class="fetchEndedText" v-show="busy || fetchEndedText === '已经到底了！'">{{ fetchEndedText }}</p>
    </section>
  </article>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
import GridTitle from '../components/GridTitle'
import Grid from '../components/Grid'
import Spinner from '../components/Spinner'
import { fetchMovies } from '../api/api'

export default {
  directives: {
    infiniteScroll
  },
  components: {
    GridTitle,
    Grid,
    Spinner
  },
  data () {
    return {
      loading: true,
      busy: false,
      start: 0,
      count: 9,
      fetchEndedText: false,
      movieList: {
        title: '',
        movies: []
      }
    }
  },
  methods: {
    loadMore () {
      if (this.fetchEndedText !== '已经到底了！') {
        this.fetchEndedText = '加载中...'
      } else {
        this.fetchEndedText = '已经到底了！'
        return
      }

      this.busy = true

      fetchMovies(this.$route.query.type, this.start, this.count)
        .then((response) => {
          if (response.subjects.length === 0) {
            this.fetchEndedText = '已经到底了！'
          }

          if (this.start === 0) {
            this.movieList.movies = response.subjects
            this.movieList.title = response.title
            this.loading = false
          } else {
            this.movieList.movies = this.movieList.movies.concat(response.subjects)
          }

          this.start += this.count
          this.busy = false
        })
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
article {
  margin: 0 auto;
  max-width: 630px;
}
.fetchEndedText {
  padding: 10px 0;

  font-size: 15px;
  text-align: center;

  color: #666;
}
</style>
