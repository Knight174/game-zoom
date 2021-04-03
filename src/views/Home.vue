<template>
  <Header :title="title"></Header>
  <div class="home">
    <div class="rank">
      <h1>Leaderboard</h1>
      <h3>Top 10</h3>
    </div>
    <MySwiper :rank="games"></MySwiper>
    <table class="top10">
      <tr>
        <th>排名</th>
        <th>游戏名称</th>
        <th>游戏类型</th>
      </tr>
      <tr v-for="item in games" :key="item.id">
        <td>{{ item.id }}</td>
        <td>
          <a :href="item.url">{{ item.name }}</a>
        </td>
        <td>{{ item.type.toString() }}</td>
      </tr>
    </table>
  </div>
  <Loading v-show="!show"></Loading>
</template>

<script>
import Header from "@/components/Header.vue";
import MySwiper from "@/components/Swiper.vue";
import Loading from "@/components/Loading.vue";
import { getRecords } from "@/utils/api.js";

export default {
  inheritAttrs: false,
  name: "Home",
  data() {
    return {
      title: "GAME ZOOM",
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
    MySwiper,
    Loading,
  },
  methods: {
    async getData() {
      const res = await getRecords(10);
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

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.home {
  max-height: calc(100% - 9rem);
  overflow: auto;
  .rank {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 12rem;
    font-size: 3.6rem;
    text-shadow: 0 10px 5px rgba(0, 0, 0, 0.25);
    h1 {
      letter-spacing: 0.12em;
      font-weight: 700;
    }
    h3 {
      margin-top: 1.5rem;
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
  .top10 {
    width: 90%;
    margin: 2rem auto;
    font-size: $s-font / 1.5;
    background-color: rgba($c-black, 0.8);
    border-radius: 0.8rem;
    th {
      padding: 1.5rem 0;
      font-weight: 700;
      color: $c-free;
    }
    td {
      font-size: $s-font / 2;
      padding: 1rem;
      a {
        color: $c-font;
      }
    }
    th:nth-child(1),
    td:nth-child(1) {
      min-width: 20%;
      text-align: center;
    }
  }
}
</style>
