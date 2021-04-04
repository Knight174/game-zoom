<template>
  <a :href="way" class="btn-wrap">
    <button class="btn">访问 Steam</button>
  </a>
</template>

<script>
export default {
  name: "AchieveWay",
  props: {
    way: {
      type: String,
      default: "javascript:;",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-wraper {
  display: inline-block;
}
.btn {
  width: 100%;
  height: 5rem;
  background-color: transparent;
  text-align: center;
  outline: none;
  color: $c-font;
  font-size: $s-font;
  border: 3px solid $c-free;
}
</style>
