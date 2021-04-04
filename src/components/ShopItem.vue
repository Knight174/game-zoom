<template>
  <li v-for="item in games" :key="item.id">
    <router-link
      :to="{
        name: 'Detail',
        params: { nameen: item.nameen },
      }"
    >
      <div class="imgbox">
        <img :src="item.Attachments[0].url" :alt="item.name" />
      </div>
    </router-link>
    <router-link to="/">
      <h1>{{ item.name }}</h1>
    </router-link>
    <h3>{{ item.type }}</h3>
    <div class="price price-free" v-if="item.price === 0">
      {{ "免费" }}
    </div>
    <div class="price" v-else-if="item.discount === 1">
      {{ "￥" + item.price }}
    </div>
    <div class="price" v-else>
      {{ "￥" + parseInt(item.price * item.discount) }}
      <span class="t-price">特价</span>
      <span class="o-price">{{ "￥" + item.price }}</span>
    </div>
    <div
      class="like material-icons"
      @click="toggleLike(item.id)"
      v-show="item.isLike"
    >
      favorite_border
    </div>
    <div
      class="like material-icons"
      @click="toggleLike(item.id)"
      v-show="!item.isLike"
    >
      favorite
    </div>
  </li>
</template>

<script>
export default {
  name: "ShopItem",
  props: {
    games: Array,
  },
  data() {
    return {
      likes: [],
    };
  },
  watch: {},
  methods: {
    toggleLike() {},
  },
};
</script>

<style lang="scss" scoped>
.t-price {
  font-size: $s-font * 0.5;
  background-color: $c-red;
  padding: 0.5rem;
  letter-spacing: 0.5rem;
}
.o-price {
  text-decoration: line-through;
  font-size: $s-font * 0.75;
  margin-left: 2rem;
  color: rgba($c-font, 0.75);
}
.price-free {
  color: $c-free;
}
li:nth-last-child(1) {
  margin-bottom: 2rem;
}
li {
  position: relative;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: rgba($c-black, 0.6);
  box-shadow: 3px 3px 3px rgba($c-black, 0.5);
  .imgbox {
    img {
      width: 100%;
    }
  }
  a {
    color: $c-font;
  }
  h1 {
    margin: 0.8rem 0;
    font-weight: 700;
    font-size: $s-font * 0.75;
  }
  h3 {
    font-size: $s-sub;
  }
  .price {
    margin: 1rem 0;
  }
  .like {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    color: $c-like;
  }
}
</style>
