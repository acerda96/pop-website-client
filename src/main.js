import Vue from "vue";
import App from "./App.vue";
import router from "./lib/router";
import VueScrollTo from "vue-scrollto";
import VueMeta from "vue-meta";
import Vuex from "vuex";
import store from "./lib/store";
import { Datetime } from "vue-datetime";
import vmodal from "vue-js-modal";
import "@/styles/tailwind.css";
import "./lib/axios";

Vue.use(vmodal, { componentName: "modal" });
Vue.use(Vuex);
Vue.use(VueMeta);
Vue.use(VueScrollTo);

Vue.component("datetime", Datetime);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
