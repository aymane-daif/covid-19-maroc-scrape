<template>
  <div class="stats">
    <div class="box">
      <span>{{ item[0] }}</span>
      <strong>{{ item[1] }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleStats',
  props: ['item'],
};
</script>

<style></style>
