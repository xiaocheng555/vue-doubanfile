<template>
  <div class="grid">
    <div class="wp" v-for="movie in movies">
      <Card :movie="movie"></Card>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  props: ['movies'],
  data: function () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.grid {
  padding: 15px 3px 0;
  border-radius: 10px;
  box-sizing: border-box;

  background: #fff;
}
.wp {
  float: left;

  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 33.3%;

  text-align: center;
}
.clear {
  clear: both;
}
</style>
