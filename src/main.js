import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import axios from "axios";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueScrollTo);
