import axios from "axios";
import store from "./store";
import router from "./router";

export default async function setIndividual() {
  let individual;

  try {
    const { data } = await axios.get("individual");
    individual = data;
  } catch {
    store.dispatch("logout").then(() => {
      router.push("/");
    });
  }
  return individual;
}
