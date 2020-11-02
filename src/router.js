import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Browse from "./views/Browse.vue";
import SavedItems from "./views/SavedItems.vue";
import ContactUs from "./views/ContactUs.vue";
import Login from "./views/Login.vue";
import Stores from "./views/Stores.vue";
import Store from "./views/Store.vue";
import Item from "./views/Item.vue";
import Register from "./views/Register.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import Account from "./views/Account.vue";
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
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: Register,
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
      path: "/stores",
      name: "stores",
      component: Stores,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/stores/:storeId",
      name: "store",
      component: Store,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/stores/:storeId/:itemId",
      name: "item",
      component: Item,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/saved",
      name: "saved",
      component: SavedItems,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/browse/:itemId",
      name: "browse-item",
      component: Item,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
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
