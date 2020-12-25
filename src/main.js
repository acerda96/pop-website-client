import Vue from "vue";
import App from "./App.vue";
import router from "./lib/router";
import VueScrollTo from "vue-scrollto";
import VueMeta from "vue-meta";
import VueGeolocation from "vue-browser-geolocation";
import Geocoder from "@pderas/vue2-geocoder";
import * as VueGoogleMaps from "vue2-google-maps";
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
Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: "places",
  },
});

Vue.use(Geocoder, {
  defaultCountryCode: "GB",
  defaultLanguage: "en",
  defaultMode: "address",
  googleMapsApiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
});

Vue.component("datetime", Datetime);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
