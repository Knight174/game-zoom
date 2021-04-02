<template>
  <header>
    <router-link to="/" class="goback" v-show="seen">
      <span class="material-icons"> navigate_before </span>
    </router-link>
    {{ title }}
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
  data() {
    return {
      name: "👾 GAME ZOOM",
    };
  },
  computed: {
    seen() {
      if (
        this.$route.name === "Home" ||
        this.$route.name === "Shop" ||
        this.$route.name === "Account"
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
  background-color: $c-red;
  font-size: $s-font;
  font-weight: 700;
  letter-spacing: 0.125rem;
  position: sticky;
  z-index: 100;
  top: 0;
}
.goback span.material-icons {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 4.5rem;
  color: $c-font;
}
</style>
