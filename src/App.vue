<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/TopNav'

export default {
  name: 'app',
  components: {
    TopNav
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #eee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
