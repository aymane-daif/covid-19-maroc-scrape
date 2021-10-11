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

<style></style>
