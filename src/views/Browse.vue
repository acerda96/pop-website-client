<template>
  <div class="browse">
    <BrowseNav />
  </div>
</template>

<script>
import axios from "axios";
import BrowseNav from "../components/BrowseNav";

export default {
  name: "Browse",
  components: { BrowseNav },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submit() {
      axios
        .post("api/email-signup", {
          email: this.email,
        })
        .then(() => {
          this.email = "";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
</style>
