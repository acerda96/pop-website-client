import Vue from "vue";
import Vuex from "vuex";
import { authMutations, authActions } from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
  },
  mutations: {
    ...authMutations,
  },
  actions: {
    ...authActions,
  },
  getters: {
    token: (state) => state.token,
  },
});
