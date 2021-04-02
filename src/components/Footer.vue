<template>
  <footer>
    <router-link
      class="bottom-bar-btn"
      :to="{ name: 'Home', params: { id: 0 } }"
      >{{ bars[0] }}</router-link
    >
    <router-link
      class="bottom-bar-btn"
      :to="{ name: 'Shop', params: { id: 1 } }"
      >{{ bars[1] }}</router-link
    >
    <router-link
      class="bottom-bar-btn"
      :to="{ name: 'Account', params: { id: 2 } }"
      >{{ bars[2] }}</router-link
    >
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      bars: ["Home", "Shop", "Account"],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
  // background-color: $c-red;
  font-size: $s-font;
  font-weight: 700;
  letter-spacing: 0.125rem;
  position: fixed;
  bottom: 0;
  .bottom-bar-btn {
    flex: 1;
    color: $c-font;
    background-color: $c-red;
  }
  a.router-link-exact-active {
    text-shadow: 0 5px 3px $c-black;
    background-color: transparent;
  }
}
</style>
