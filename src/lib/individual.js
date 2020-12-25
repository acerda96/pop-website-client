import axios from "axios";
import store from "./store";

export default async function setIndividual() {
  let individual;

  try {
    const { data } = await axios.get("individual");
    individual = data;
  } catch {
    store.dispatch("logout");
  }
  return individual;
}
