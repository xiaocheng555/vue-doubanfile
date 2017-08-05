<template>
  <article>
    <Spinner :show="!movie.title"></Spinner>

    <section v-if="movie.title">
      <div class="info">
        <h2>{{movie.title}}</h2>
        <img :src="movie.images.large">
        <p>{{getMeta}}</p>
      </div>
      <div class="feel">
        <span>想看({{movie.reviews_count}})</span>&nbsp;&nbsp;
        <span>看过({{movie.wish_count}})</span>
      </div>
      <div class="introduction">
        <h4>{{movie.title}}的剧情介绍</h4>
        <p>
          {{movie.summary}}
        </p>
      </div>
    </section>
  </article>
</template>

<script>
import Spinner from '../components/Spinner'
import { fetchMovieDetail } from '../api/api'

export default {
  components: {
    Spinner
  },
  data: function () {
    return {
      movie: {

      }
    }
  },
  computed: {
    getMeta () {
      var cast = this.movie.casts.reduce((name, value) => {
        return name ? name + ' / ' + value.name : value.name
      }, '')
      return this.movie.countries.join(' / ') + ' / ' + this.movie.genres.join(' / ') + ' / ' + this.movie.directors[0].name + '(导演) / ' + cast
    }
  },
  mounted () {
    fetchMovieDetail(this.$route.params.id)
      .then((response) => {
        this.movie = response
      })
  }
}
</script>

<style lang="scss" scoped>
  $feel-color: #FFB712;

  section {
    padding: 15px;
    border-radius: 10px;

    background: #fff;
  }
.info {
  h2 {
    padding: 3px 0;

    font-size: 16px;
    font-weight: lighter;
  }
  img {
    width: 100%;
  }
  p {
    padding: 12px 0;
  }
}
.feel {
  display: flex;

  padding: 15px 0;

  span {
    flex: 1;

    border: 1px solid $feel-color;
    border-radius: 5px;

    font-size: 15px;
    text-align: center;
    line-height: 30px;

    color: $feel-color;
  }
}
.introduction {
  padding-bottom: 30px;

  h4 {
    padding: 15px 0;
    font-size: 15px;
    color: #aaa;
  }
  p {
    font-size: 15px;
    color: #555;
  }
}
</style>
