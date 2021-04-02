<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="item in rank" :key="item.id">
      <img :src="item.Attachments[0].url" :alt="item.name" />
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Pagination, Scrollbar, A11y]);

export default {
  name: "MySwiper",
  props: {
    rank: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 20rem;
  .swiper-slide {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      border-radius: 0.8rem;
    }
  }
}
</style>
