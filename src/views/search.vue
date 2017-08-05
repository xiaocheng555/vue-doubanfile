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
import { fetchSearchMovie } from '../api/api'

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
      fetchEndedText: false,
      movieList: {
        title: '',
        movies: []
      }
    }
  },
  watch: {
    $route () {
      this.loadAgain()
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
      const query = this.$route.query.query

      fetchSearchMovie(query, this.start)
        .then((response) => {
          if (response.subjects.length === 0) {
            this.fetchEndedText = '已经到底了！'
          }

          if (this.start === 0) {
            this.movieList.movies = response.subjects
            this.movieList.title = `搜索"${query}"的结果`
            this.loading = false
          } else {
            this.movieList.movies = this.movieList.movies.concat(response.subjects)
          }

          this.start += response.count
          this.busy = false
        })
    },
    loadAgain () {
      this.loading = true
      this.start = 0
      this.movieList.title = ''
      this.movieList.movies = []
      this.loadMore()
    }
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
