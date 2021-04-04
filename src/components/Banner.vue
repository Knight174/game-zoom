<template>
  <div class="banner">
    <swiper
      v-if="show"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(item, index) in imgs" :key="item.id">
        <img
          @click="emitIndex(index)"
          class="imgStyle"
          :src="item.url"
          :alt="item.name"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Pagination, Scrollbar, A11y]);

export default {
  name: "Banner",
  props: {
    imgs: Array,
  },
  data() {
    return {
      show: false,
      detailImg: "",
    };
  },
  watch: {
    imgs(n) {
      if (n.length) {
        this.show = true;
      }
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    emitIndex(index) {
      // console.log("banner", index);
      this.$emit("pass-index", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  min-height: 15rem;
}
.banner:empty {
  background-color: rgba($c-font, 0.25);
}

.swiper-slide-active {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
img.imgStyle {
  width: 85%;
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
