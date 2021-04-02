<template>
  <router-view :games="games" :key="this.$route.fullPath" />
  <Footer></Footer>
  <Loading v-if="!gotData"></Loading>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Footer from "@/components/Footer.vue";
import { handleData } from "@/utils/airtable.js";

export default {
  components: {
    Footer,
    Loading,
  },
  data() {
    return {
      games: [],
      gotData: false,
      gameList: null,
    };
  },
  watch: {
    games(n) {
      if (n.length) {
        this.gotData = true;
      }
    },
  },
  methods: {
    gotPageOfGames(records, fetchNextPage) {
      const data = [];
      data.push(...records);
      this.games = [...data];
      let list = [];
      for (let record of this.games.values()) {
        list.push(Object.assign({}, record.fields));
      }
      list.sort((a, b) => {
        return a.id - b.id;
      });
      fetchNextPage();
      this.getGames(list);
    },
    gotAllGames(err) {
      if (err) {
        console.log("error loading games");
        console.error(err);
        return;
      }
    },
    getGames(data) {
      this.games = [...data];
    },
  },
  async created() {
    handleData("Table 1", this.gotPageOfGames, this.gotAllGames);
  },
};
</script>

<style lang="scss">
html {
  font-size: $html-size;
  user-select: none;
}
#app {
  width: 100vw;
  height: 100vh;
  color: $c-font;
  background-image: url("./assets/app.png");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-size: $s-font;
}
</style>
