import axios from "axios";
import store from "./store";
import router from "./router";

axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL =
  process.env.VUE_APP_BASE_URL || "https://api-pop-marketplace.herokuapp.com";

axios.interceptors.request.use((config) => {
  const token = store.getters.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch("logout");
      router.push("/login");
    }
    throw error;
  }
);
