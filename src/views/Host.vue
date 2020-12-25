<template>
  <div class="bg-white w-full mt-10 my-4 flex flex-col items-center xs:mt-5">
    <NewStoreModal />
    <h2 class="text-3xl text-center py-3">My Stores</h2>

    <hr class="w-full" />
    <Loader v-if="isLoading" />
    <div class="flex flex-col items-center mb-10 w-full" v-else>
      <p class="pt-3">
        Only approved stores/items will be visible to the public.
      </p>
      <div class="fade-in flex justify-center flex-wrap w-1/2">
        <div
          class="flex flex-col items-center"
          v-for="store in stores"
          :key="store.id"
        >
          <div
            class="bg-white flex p-5 mx-5 mt-5 justify-center cursor-pointer border border-gray-700 w-40 text-center shadow-md hover:bg-gray-100"
          >
            <router-link tag="p" :to="'/store/' + store._id">
              <p>{{ store.name }}</p>
              <p class="italic text-accent-medium">
                {{
                  store.status == "approved" ? "Approved" : "Pending approval"
                }}
              </p></router-link
            >
          </div>
          <CloseOutline
            class="underline text-accent-medium mt-2 mb-5 cursor-pointer"
            @click="deleteStore(store._id)"
          />
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
import setIndividual from "@/lib/individual";
import CloseOutline from "vue-material-design-icons/CloseOutline.vue";

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
    CloseOutline,
  },
  async mounted() {
    this.isLoading = true;
    this.individual = await setIndividual();
    this.getStores();
  },
  methods: {
    async getStores() {
      try {
        const { data } = await axios.get(
          `stores?userId=${this.individual._id}`
        );
        this.stores = data;
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteStore(storeId) {
      if (window.confirm("Are you sure you want to delete this store?")) {
        try {
          await axios.delete(`stores/${storeId}`);
          this.getStores();
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>
