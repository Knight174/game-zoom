<template>
  <div class="login">
    <div class="titles">
      <h1>GAME ZOOM</h1>
      <h3>我的游戏领域</h3>
    </div>
    <form>
      <div class="form-group">
        <label for="username" class="material-icons">face</label>
        <input
          type="text"
          name="username"
          id="username"
          v-model.trim="username"
          autocomplete="off"
          minlength="5"
          maxlength="16"
        />
      </div>
      <div class="form-group">
        <label for="password" class="material-icons">lock</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model.trim="password"
          minlength="8"
          maxlength="16"
        />
      </div>
      <button @click.prevent="login">Login</button>
    </form>
    <div class="back material-icons" @click="gohome">home</div>
  </div>
</template>

<script>
import user from "@/utils/user.js";
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) return;
      user.name = this.username;
      user.pwd = this.password;
      window.localStorage.setItem("user", this.username);
      window.localStorage.setItem("isLogin", "ok");
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);
    },
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 15vh;
  transform: translateX(-50%);
  width: $s-font * 2;
  height: $s-font * 2;
  font-size: $s-font * 1.5;
  background-color: rgba($c-black, 0.8);
  box-shadow: 0.3px 0.3px 3px $c-font;
  border-radius: 50%;
  &:active {
    box-shadow: none;
  }
}

.login {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-image: url("~@/assets/game.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  .titles {
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    h1 {
      letter-spacing: 0.8rem;
      font-weight: 700;
      font-size: $s-font * 1.5;
      text-shadow: 0 5px 3px $c-black;
    }
    h3 {
      margin-top: 1rem;
      letter-spacing: 1.2rem;
      font-size: $s-sub;
    }
  }
  form {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    .form-group {
      padding: 0 2rem;
      height: 4rem;
      margin-bottom: 2rem;
      background-color: rgba($c-black, 0.5);
      display: flex;
      label {
        display: inline-block;
        height: 100%;
        line-height: 4rem;
        text-shadow: 0 5px 3px $c-black;
        font-size: $s-icon * 1.5;
        flex: 1;
      }
      input {
        flex: 3;
        height: 4rem;
        padding-left: 1rem;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 2rem;
        color: $c-font;
      }
    }
    button {
      width: 80%;
      height: 4.5rem;
      margin: 0 auto;
      border: 0.5rem solid $c-red;
      background-color: transparent;
      border-radius: 0.8rem;
      font-size: $s-font;
      color: $c-font;
      outline: none;
    }
    button:active {
      background-color: $c-red;
    }
  }
}
</style>
