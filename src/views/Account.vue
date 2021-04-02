<template>
  <Header :title="title"></Header>
  <div class="account">
    <h1>Hi {{ user }}</h1>
    <button @click="logOut">Log out</button>
  </div>
</template>

<script>
import user from "@/utils/user.js";
import Header from "@/components/Header.vue";
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
