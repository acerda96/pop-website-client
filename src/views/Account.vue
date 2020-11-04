<template>
  <div class="stores">
    <NewStoreModal />
    <Loader v-if="isLoading" />
    <div class="flex flex-col items-center" v-if="!isLoading">
      <p>Name</p>
      <p>Email</p>
      <p>Password</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "Stores",
  data() {
    return {
      individual: {},
      isLoading: null,
    };
  },
  components: {
    Loader,
  },
  async mounted() {
    this.isLoading = true;
    await this.setIndividual();
  },
  methods: {
    async setIndividual() {
      await axios
        .get("api/individual")
        .then((res) => {
          this.individual = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
