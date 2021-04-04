<template>
  <Header :title="title"></Header>
  <ul class="shop">
    <ShopItem :games="games"></ShopItem>
  </ul>
  <Footer></Footer>
  <Loading v-show="!show"></Loading>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ShopItem from "@/components/ShopItem.vue";
import Loading from "@/components/Loading.vue";
import { tableShop, getFirstPageRecords } from "@/utils/api.js";

export default {
  name: "Shop",
  computed: {},
  data() {
    return {
      title: "GAME ZOOM SHOP",
      games: [],
      show: false,
    };
  },
  watch: {
    games(n) {
      if (n.length) {
        this.show = !this.show;
      } else {
        this.show = false;
      }
    },
  },
  components: {
    Header,
    Footer,
    ShopItem,
    Loading,
  },
  methods: {
    async getData() {
      const res = await getFirstPageRecords(tableShop);
      // console.log(res);
      const data = await res
        .map((record) => {
          return record.fields;
        })
        .sort((a, b) => {
          return a.id - b.id;
        });

      this.games = [...data];
    },
  },
  created() {
    this.getData();
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
