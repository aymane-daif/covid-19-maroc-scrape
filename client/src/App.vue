<template>
  <main v-if="!loading">
    <h1>Statistics of Coronavirus in {{ data.countryName }}</h1>
    <ListStats :stats="data" />
  </main>
</template>

<script>
import ListStats from './components/ListStats.vue';

export default {
  name: 'App',
  data: () => ({
    loading: true,
    data: null,
    error: '',
  }),
  components: {
    ListStats,
  },
  async created() {
    try {
      const data = await fetch('http://localhost:1947/api/covid/results');
      const results = await data.json();
      this.data = results;
      this.loading = false;
    } catch (error) {
      console.log(error.message);
      his.loading = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
