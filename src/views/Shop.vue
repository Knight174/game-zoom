<template>
  <Header :title="title"></Header>
  <ul class="shop">
    <ShopItem :games="games"></ShopItem>
  </ul>
</template>

<script>
import Header from "@/components/Header.vue";
import ShopItem from "@/components/ShopItem.vue";

export default {
  name: "Shop",
  props: {
    games: Array,
  },
  computed: {},
  data() {
    return {
      title: "GAME ZOOM SHOP",
    };
  },
  components: {
    Header,
    ShopItem,
  },
};
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0px;
}
.shop {
  max-height: calc(100% - 9rem);
  overflow: auto;
}
</style>
