import axios from "axios";
import store from "./store";
import router from "./router";

export default async function setIndividual() {
  let individual;
  await axios
    .get("individual")
    .then((res) => {
      individual = res.data;
    })
    .catch(() =>
      store.dispatch("logout").then(() => {
        router.push("/");
      })
    );
  return individual;
}
