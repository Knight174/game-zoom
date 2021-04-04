import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
    meta: { isKeepAlive: true },
  },
  {
    path: "/detail/:nameen",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue"),
    props: true,
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "account" */ "../views/Account.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/404",
    alias: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // scrollBehavior(to, from, savedPosition) {
  //   // console.log("即将前往：", to); // to：要进入的目标路由对象，到哪里去
  //   // console.log("当前：", from); // from：离开的路由对象，哪里来
  //   // console.log("保存的位置：", savedPosition); // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}

  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     const position = {};
  //     if (to.hash) {
  //       position.selector = to.hash;
  //       if (document.querySelector(to.hash)) {
  //         return position;
  //       }
  //       return;
  //     }
  //   }
  // },
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!(window.localStorage.getItem("isLogin") === "ok")) {
      next({
        name: "Login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
