<template>
  <div class="loading">
    <RotateCircle></RotateCircle>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import RotateCircle from "./RotateCircle";

export default {
  name: "Loading",
  data() {
    return {
      title: "资源加载中...",
    };
  },
  components: {
    RotateCircle,
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 199;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/app.png");
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.8rem;
}
</style>
