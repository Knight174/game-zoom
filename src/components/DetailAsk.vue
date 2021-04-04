<template>
  <div class="ask">
    <div class="ask-btns">
      <div class="btn win" @click="state = 0">Windows</div>
      <div class="btn mac" @click="state = 1">Mac OS X</div>
      <div class="btn lin" @click="state = 2">SteamOS+Linux</div>
    </div>
    <ul class="content" v-if="seen">
      <li>
        <span>操作系统：</span>
        {{ configs[state].OS }}
      </li>
      <li>
        <span>处理器：</span>
        {{ configs[state].CPU }}
      </li>
      <li>
        <span>内存：</span>
        {{ configs[state].Memery }}
      </li>
      <li>
        <span>显卡：</span>
        {{ configs[state].GC }}
      </li>
      <li>
        <span>存储空间：</span>
        {{ configs[state].SC }}
      </li>
    </ul>
    <div class="content" v-else></div>
  </div>
</template>

<script>
export default {
  name: "DetailAsk",
  props: {
    configs: Array,
  },
  watch: {
    configs(n) {
      if (n.length) {
        this.seen = true;
      }
    },
  },
  data() {
    return {
      state: 0,
      seen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.ask {
  background-color: rgba($c-black, 0.8);
  .ask-btns {
    display: flex;
    margin-bottom: 1rem;
    font-size: $s-font * 0.75;
    .btn {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
      border-right: 1px solid $c-font;
      border-bottom: 3px solid $c-font;
    }
    .btn:nth-last-child(1) {
      border-right: none;
    }
    .btn.lin {
      font-size: $s-font * 0.6;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 10rem;
    li {
      display: flex;
      align-items: center;
      font-size: $s-sub;
      flex: 1;
      margin-bottom: 1rem;
      padding-left: 1rem;
      span {
        min-width: 8rem;
      }
    }
  }
  .content:empty {
    background-color: rgba($c-font, 0.25);
  }
}
</style>
