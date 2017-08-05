<template>
  <header>
      <h1>
        <router-link to="/">电影</router-link>
      </h1>
      <div id="search">
        <input @keyup.enter="searchMovie" ref="input" type="text" name="" placeholder="请输入搜索的内容">
        <div class="wp">
          <img src="../assets/search-btn.png" @click="searchMovie">
        </div>
      </div>
  </header>
</template>

<script>
export default {
  methods: {
    searchMovie () {
      this.$router.push({
        name: 'movie-search',
        query: {
          query: this.$refs.input.value
        }
      })
    }
  }
}
</script>

<style lang="scss" scope>
$header-height: 47px;
$search-height: 36px;
h1 {
  position: fixed;
  z-index: 2;
  top: 0;

  padding-left: 14px;
  width: 100%;
  height: $header-height;

  background: #fff;

  a {
    display: inline-block;

    font-size: 15px;
    font-weight: lighter;
    line-height: $header-height;
    text-decoration: none;

    color: #6C84E8;
  }
}

#search {
  position: relative;
  z-index: 1;

  margin-top: $header-height;

  input {
    display: inline-block;

    padding: 0 40px 0 10px;
    box-sizing: border-box;
    border: 0;
    width: 100%;
    height: $search-height;

    font-size: 13px;
    font-family: '微软雅黑';

    background: #F5F5F5;
  }
  .wp {
    position: absolute;
    top: 0;
    right: 10px;
  }
  img {
    display: block;

    margin-top: 8px;
    width: 20px;
    height: 20px;
  }
}

</style>
