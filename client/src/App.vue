<template>
  <main>
    <section v-if="!loading">
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div v-else>
        <h1>Statistics of Coronavirus in {{ data.countryName }}</h1>
        <ListStats :stats="data" />
      </div>
    </section>
    <section v-else>
      <Loader />
    </section>
  </main>
</template>

<script>
import ListStats from './components/ListStats.vue';
import Loader from './components/Loader.vue';

export default {
  name: 'App',
  data: () => ({
    loading: true,
    data: null,
    error: '',
  }),
  components: {
    ListStats,
    Loader,
  },
  async created() {
    try {
      const data = await fetch('http://localhost:1947/api/covid/results');
      const results = await data.json();
      this.data = results;
      this.loading = false;
    } catch (error) {
      console.log(error.message);
      this.error = 'Something went wrong...';
      this.loading = false;
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
.error {
  color: #a7526e;
  font-size: 2rem;
}
</style>
