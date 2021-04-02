<template>
  <div class="not-found">
    <h1>Not Found</h1>
    <p>
      Try going
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: $c-black;
  p > a {
    color: $c-free;
  }
}
</style>
