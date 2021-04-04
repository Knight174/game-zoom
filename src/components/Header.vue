<template>
  <header>
    {{ title }}
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
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
</style>
