<template>
  <div class="box">
    <span>{{ item[0] }}</span>
    <strong>{{ item[1] }}</strong>
  </div>
</template>

<script>
export default {
  name: 'SingleStats',
  props: ['item'],
};
</script>

<style scoped>
.box {
  height: 170px;
  width: 200px;
  border-radius: 2.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0.5rem;
}
.box span {
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 15px;
}
.box strong {
  opacity: 0.9;
}
.box:nth-child(1) {
  background-color: #e9e7fd;
}
.box:nth-child(2) {
  background-color: #ffd3e2;
}
.box:nth-child(3) {
  background-color: #c8f7dc;
}
</style>
