<template>
  <Header2 :title="currentGame.name"></Header2>
  <div class="detail">
    <section class="part banner">
      <Banner
        :imgs="currentGame.Attachments"
        @pass-index="handleIndex"
      ></Banner>
      <Type :type="currentGame.type"></Type>
    </section>
    <section class="part description">
      <h1 class="title">游戏详情</h1>
      <p>
        {{ currentGame.description }}
      </p>
    </section>
    <section class="part ask">
      <h1 class="title">最低系统需求</h1>
      <DetailAsk :configs="configs"></DetailAsk>
    </section>
    <section class="part">
      <h1 class="title">获取渠道</h1>
      <AchieveWay :way="currentGame.url"></AchieveWay>
    </section>
  </div>
  <BannerDetail
    :currentIndex="bannerDetailIndex"
    :currentPic="currentGame.Attachments"
    v-show="isShow"
    @banner-detail-hd="isShow = !isShow"
  ></BannerDetail>
</template>

<script>
import Header2 from "@/components/Header2.vue";
import DetailAsk from "@/components/DetailAsk.vue";
import AchieveWay from "@/components/AchieveWay.vue";
import Banner from "@/components/Banner.vue";
import BannerDetail from "@/components/BannerDetail.vue";
import Type from "@/components/Type.vue";
import { tableDetail, getFirstPageRecords } from "@/utils/api.js";

export default {
  name: "Detail",
  props: {
    nameen: String,
  },
  data() {
    return {
      games: [],
      currentGame: {},
      configs: [],
      bannerDetailIndex: null,
      isShow: false,
    };
  },
  components: {
    Header2,
    DetailAsk,
    AchieveWay,
    Banner,
    Type,
    BannerDetail,
  },
  watch: {
    games(n) {
      this.currentGame = n.find((game) => game.nameen === this.nameen);
      const list = [
        this.currentGame.config_win,
        this.currentGame.config_mac,
        this.currentGame.config_lin,
      ];
      this.configs = this.handleConfigItem(list);
      // console.log(this.configs);
    },
  },
  methods: {
    async getData() {
      const res = await getFirstPageRecords(tableDetail);
      const data = await res
        .map((record) => {
          return record.fields;
        })
        .sort((a, b) => {
          return a.id - b.id;
        });
      return data;
    },
    handleConfigItem(data) {
      const target = [];
      // console.log(1, "初始化target");
      let len = data.length;
      let str = "";
      for (let i = 0; i < len; i++) {
        str = data[i];
        // console.log(2, i, str);
        let arr = str.split(";");
        // console.log(3, i, arr);
        arr.forEach((item) => {
          if (!target[i]) target[i] = {};
          // console.log(4, i, item.split(":"));
          const key = item.split(":")[0].replace(/\n/, "");
          const value = item.split(":")[1];
          target[i][key] = value;
          // console.log(5, target[i]);
        });
      }
      // console.log(target);
      return target;
    },
    handleIndex(index) {
      // console.log(index, "now at parent");
      this.bannerDetailIndex = index;
      this.isShow = !this.isShow;
    },
  },
  async created() {
    const data = await this.getData();
    this.games = [...data];
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.detail {
  padding-top: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  width: 100%;
  margin: auto;
  margin-top: 4.5rem;
  min-height: calc(100% - 5.5rem);
  overflow: auto;
  background-color: rgba($c-black, 0.5);
  .part {
    width: 90%;
    margin: auto;
    margin-bottom: 2rem;
    h1.title {
      font-size: $s-font * 0.75;
      font-weight: 700;
      letter-spacing: 0.5rem;
    }
    h1.title::before {
      content: "";
      display: inline-block;
      width: 0.5rem;
      height: 4rem;
      background-color: $c-free;
      vertical-align: middle;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
  .description {
    p {
      min-height: 10rem;
      text-indent: 2em;
      font-size: $s-sub;
      line-height: 1.5;
    }
    p:empty {
      background-color: rgba($c-font, 0.25);
      border-radius: 0.5rem;
    }
  }
}
</style>
