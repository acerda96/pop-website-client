import axios from "axios";
import router from "./router";

export const authMutations = {
  setToken(state, token) {
    state.token = token;
  },
  setAuthError(state, error) {
    state.authError = error;
  },
};

export const authActions = {
  async login({ commit }, { user, isRegister }) {
    try {
      const endpoint = isRegister ? "register" : "login";
      const res = await axios.post(`account/${endpoint}`, user);

      const token = res.data && res.data.token;
      if (token) {
        commit("setToken", token);

        localStorage.setItem("token", token, "7d");
        router.push("/browse");

        axios.defaults.headers.common["Authorization"] = token;
        commit("authError", null);
      }
    } catch (err) {
      commit("setToken", null);
      commit("setAuthError", err.response.data.error);
      localStorage.removeItem("token");
    }
  },
  logout({ commit }) {
    commit("setToken", null);

    localStorage.removeItem("token");
    router.push("/login");

    delete axios.defaults.headers.common["Authorization"];
  },
};
