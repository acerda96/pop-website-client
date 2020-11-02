import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import axios from "axios";
import VueMeta from "vue-meta";
import Vuex from "vuex";
import store from "./store";
import { Datetime } from "vue-datetime";
import vmodal from "vue-js-modal";

Vue.use(vmodal, { componentName: "modal" });

Vue.use(Vuex);

Vue.use(VueMeta);

Vue.component("datetime", Datetime);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueScrollTo);
