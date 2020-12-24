<template>
  <div class="bg-white w-full my-4 flex flex-col items-center xs:mt-1">
    <NewStoreModal />
    <h2 class="text-3xl text-center py-3">My Stores</h2>
    <hr class="w-full" />
    <Loader v-if="isLoading" />
    <div class="flex flex-col items-center mb-10 w-full" v-else>
      <div class="fade-in flex justify-center flex-wrap w-1/2">
        <div
          class="bg-white flex p-5 m-5 justify-center pointer border border-gray-700 w-72 text-center shadow-md"
          v-for="store in stores"
          :key="store.id"
        >
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
import Loader from "@/components/Loader.vue";
import NewStoreModal from "@/components/NewStoreModal.vue";
import setIndividual from "@/utils/individual";

export default {
  name: "Host",
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
    this.individual = await setIndividual();
    this.getStores();
  },
  methods: {
    getStores() {
      axios.get(`stores?userId=${this.individual._id}`).then((res) => {
        this.stores = res.data;
        this.isLoading = false;
      });
    },
  },
};
</script>
