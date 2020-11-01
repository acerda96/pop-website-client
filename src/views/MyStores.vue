<template>
  <div class="my-stores">
    <Loader v-if="isLoading" />
    <div class="my-stores__stores" v-if="!isLoading">
      <div class="my-stores__store" v-for="store in stores" :key="store.id">
        <router-link :to="'/my-stores/' + store._id">
          <p>{{ store.name }}</p>
        </router-link>
      </div>
    </div>
    <router-link to="/add-store" v-if="!isLoading">
      <button class="square-btn">Add store</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "MyStores",
  data() {
    return {
      individual: {},
      stores: [],
      isLoading: null,
    };
  },
  components: {
    Loader,
  },
  async mounted() {
    this.isLoading = true;
    await this.setIndividual();
    this.getStores();
  },
  methods: {
    async setIndividual() {
      await axios
        .get("api/individual")
        .then((res) => {
          this.individual = res.data;
        })
        .catch((err) => console.log(err));
    },
    getStores() {
      axios
        .get(`api/stores?userId=${this.individual._id}`)
        .then((res) => {
          this.stores = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
