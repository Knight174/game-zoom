<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="Account">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {};
</script>

<style lang="scss">
html {
  font-size: $html-size;
  user-select: none;
}
#app {
  width: 100vw;
  height: 100vh;
  color: $c-font;
  background-image: url("./assets/app.png");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-size: $s-font;
}
</style>
