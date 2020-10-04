import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Browse from "./views/Browse.vue";
import ContactUs from "./views/ContactUs.vue";
import NotReady from "./views/NotReady.vue";
import Login from "./views/Login.vue";
import MyStores from "./views/MyStores.vue";
import MyStore from "./views/MyStore.vue";
import RegisterFirst from "./views/RegisterFirst.vue";
import RegisterSecond from "./views/RegisterSecond.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import store from "./store.js";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/browse",
      name: "browse",
      component: Browse,
    },
    {
      path: "/app",
      name: "not-ready",
      component: NotReady,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/sign-up-1",
      name: "sign-up-1",
      component: RegisterFirst,
    },
    {
      path: "/sign-up-2",
      name: "sign-up-2",
      component: RegisterSecond,
    },
    {
      path: "/contact",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicy,
    },
    {
      path: "/my-stores",
      name: "my-stores",
      component: MyStores,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/my-stores/:id",
      name: "my-store",
      component: MyStore,
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
