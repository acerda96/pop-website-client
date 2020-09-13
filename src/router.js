import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Browse from "./views/Browse.vue";
import ContactUs from "./views/ContactUs.vue";
import NotReady from "./views/NotReady.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";

Vue.use(Router);

export default new Router({
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
      path: "/contact",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicy,
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
