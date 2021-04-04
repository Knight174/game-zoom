<template>
  <Header :title="title"></Header>
  <div class="account">
    <h1>Hi {{ user }}</h1>
    <button @click="logOut">Log out</button>
  </div>
  <Footer></Footer>
</template>

<script>
import user from "@/utils/user.js";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Account",
  data() {
    return {
      title: "GAME ZOOM ACCOUNT",
      user: window.localStorage.getItem("user"),
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    logOut() {
      user.name = null;
      user.pwd = null;
      window.localStorage.removeItem("isLogin");
      window.localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.account {
  position: relative;
  overflow: auto;
  height: calc(100% - 9rem);
  h1 {
    margin: 5rem 0;
    text-align: center;
    text-shadow: 0 0.5rem 0.5rem $c-black;
  }
  button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 4.5rem;
    border: 0;
    border-radius: 3rem;
    background-color: $c-red;
    color: $c-font;
    font-size: $s-font;
    box-shadow: 0 0.5rem 0.5rem $c-black;
  }
  button:active {
    box-shadow: none;
  }
}
</style>
