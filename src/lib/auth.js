import axios from "axios";
import router from "./router";

export const authMutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export const authActions = {
  async login({ commit }, { user, isRegister }) {
    try {
      const {
        data: { token },
      } = isRegister
        ? await axios.post("account/register", user)
        : await axios.post("account/login", user);
      if (token) {
        commit("setToken", token);

        localStorage.setItem("token", token, "7d");
        router.push("/browse");

        axios.defaults.headers.common["Authorization"] = token;
      }
    } catch {
      commit("setToken", null);
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
