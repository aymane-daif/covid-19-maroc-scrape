<template>
  <div class="stats">
    <SingleStats :item="stats.cases" />
    <SingleStats :item="stats.deaths" />
    <SingleStats :item="stats.recovers" />
  </div>
</template>

<script>
import SingleStats from '@/components/SingleStats.vue';
export default {
  name: 'ListStats',
  props: ['stats'],
  components: { SingleStats },
};
</script>

<style scoped>
.stats {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20vh;
}
@media (max-width: 687px) {
  .stats {
    margin-top: 10vh;
    grid-template-columns: auto;
  }
}
</style>
