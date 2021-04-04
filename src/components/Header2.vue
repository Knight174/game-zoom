<template>
  <header>
    <span class="material-icons goback" @click="back"> navigate_before </span>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header2",
  props: {
    title: String,
  },
  methods: {
    back() {
      console.log(1);
      return this.$router.go(-1);
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
  z-index: 300;
  top: 0;
  h1:empty::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 4.5rem);
    height: 0.5rem;
    animation: loading 1s infinite;
  }
}

@keyframes loading {
  0% {
    background-image: linear-gradient(
      to right,
      #eea2a2 0%,
      #bbc1bf 19%,
      #57c6e1 42%,
      #b49fda 79%,
      #7ac5d8 100%
    );
  }
  50% {
    background-image: linear-gradient(
      to right,
      #bbc1bf 19%,
      #eea2a2 0%,
      #b49fda 79%,
      #57c6e1 42%,
      #7ac5d8 100%
    );
  }
  100% {
    background-image: linear-gradient(
      to right,
      #7ac5d8 100% #b49fda 79%,
      #57c6e1 42%,
      #bbc1bf 19%,
      #eea2a2 0%
    );
  }
}

.goback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 4.5rem;
  color: $c-font;
  cursor: pointer;
}
</style>
