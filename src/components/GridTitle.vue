<template>
    <h2>
      {{title}}
      <router-link v-if="moreURL" :to="moreURL">更多></router-link>
    </h2>
</template>

<script>
export default {
  props: {
    title: '',
    moreURL: ''
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding: 15px 25px;

  font-size: 14px;
  font-weight: lighter;

  color: #898989;

  a {
    float: right;

    font-size: 12px;
    text-decoration: none;

    color: inherit;
  }
}
</style>
