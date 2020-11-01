import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Browse from "./views/Browse.vue";
import SavedItems from "./views/SavedItems.vue";
import ContactUs from "./views/ContactUs.vue";
import Login from "./views/Login.vue";
import MyStores from "./views/MyStores.vue";
import MyStore from "./views/MyStore.vue";
import AddStore from "./views/AddStore.vue";
import AddItem from "./views/AddItem.vue";
import MyItem from "./views/MyItem.vue";
import Register from "./views/Register.vue";
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
      path: "/my-stores",
      name: "my-stores",
      component: MyStores,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/my-stores/:storeId",
      name: "my-store",
      component: MyStore,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/my-stores/:storeId/add",
      name: "add",
      component: AddItem,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/my-stores/:storeId/:itemId",
      name: "my-item",
      component: MyItem,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/add-store",
      name: "add-store",
      component: AddStore,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/saved-items",
      name: "saved-items",
      component: SavedItems,
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
