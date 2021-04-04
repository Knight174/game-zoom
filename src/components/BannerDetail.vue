<template>
  <transition name="fade" mode="out-in">
    <div class="banner-detail" v-if="seen" @click="$emit('banner-detail-hd')">
      <img :src="currentPic[currentIndex].url" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "BannerDetail",
  props: {
    currentIndex: Number,
    currentPic: Array,
  },
  data() {
    return {
      seen: false,
    };
  },
  watch: {
    currentIndex(n) {
      if (n !== null) {
        // console.log("蒙版接收到index：", n, "old: ", o);
        this.seen = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background-color: rgba($c-black, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
