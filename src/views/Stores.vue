<template>
  <div class="stores">
    <NewStoreModal />
    <Loader v-if="isLoading" />
    <div class="flex flex-col items-center" v-if="!isLoading">
      <div class="stores__stores">
        <div class="stores__store" v-for="store in stores" :key="store.id">
          <router-link :to="'/stores/' + store._id">
            <p>{{ store.name }}</p>
          </router-link>
        </div>
      </div>
      <button class="square-btn" @click="$modal.show('newStoreModal')">
        Add
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";
import NewStoreModal from "../views/NewStoreModal.vue";

export default {
  name: "Stores",
  data() {
    return {
      individual: {},
      stores: [],
      isLoading: null,
    };
  },
  components: {
    Loader,
    NewStoreModal,
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
