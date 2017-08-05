<template>
  <div class="card">
    <router-link :to="{ name: 'movie-detail', params: {id: movie.id}}">
      <div class="img-wp">
        <img :src="movie.images.small" :title="movie.title">
      </div>
      <h4>{{movie.title}}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      id: '',
      title: '',
      images: {
        small: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;

  a {
    display: inline-block;

    width: 100%;
    max-width: 160px;
    max-height: 230px;

    text-decoration: none;
  }
  .img-wp {
    position: relative;
    overflow: hidden;

    padding-bottom: 153.84%;

    img {
      position: absolute;
      left: 0;

      width: 100%;
      height: 100%;
    }
  }
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-top: 3px;

    font-size: 13px;
    font-weight: lighter;
    text-align: center;
    line-height: 18px;

    color: #555;

  }
}
</style>
