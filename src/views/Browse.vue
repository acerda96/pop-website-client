<template>
  <div class="browse">
    <BrowseNav />
  </div>
</template>

<script>
import BrowseNav from "../components/BrowseNav";

export default {
  name: "Browse",
  components: { BrowseNav },
  mounted() {
    console.log("created");
  },
  methods: {
    getItems() {},
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
</style>
