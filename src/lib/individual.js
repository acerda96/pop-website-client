import axios from "axios";

export default async function setIndividual() {
  let individual;
  await axios
    .get("individual")
    .then((res) => {
      individual = res.data;
    })
    .catch(() =>
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      })
    );
  return individual;
}
