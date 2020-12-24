<template>
  <div class="bg-white w-full mt-10 my-4 xs:mt-5">
    <h2 class="text-3xl text-center py-3">Saved Items</h2>
    <hr class="w-full" />
    <div class="flex justify-center">
      <Loader v-if="isLoading" />
      <div v-if="!isLoading" class="browse__items fade-in">
        <div class="browse__item" v-for="item in items" :key="item._id">
          <router-link :to="'/browse/' + item._id">
            <img
              class="browse__item-thumbnail"
              v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
            />
          </router-link>
          <div class="browse__item-details">
            <div>
              <div>{{ item.name }}</div>
              <div>£{{ item.unitPrice }}</div>
            </div>
            <SaveIcon
              :isSaved="item.isSaved"
              @click.native="toggleSaved(item._id)"
              class="pt-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";
import SaveIcon from "@/components/SaveIcon";
import setIndividual from "@/utils/individual";

export default {
  name: "SavedItems",
  components: { Loader, SaveIcon },
  data() {
    return {
      isLoading: true,
      individual: {},
      items: [],
    };
  },
  async mounted() {
    this.individual = await setIndividual();
    this.getSavedItems();
  },
  methods: {
    getSavedItems() {
      axios.get("individual/saved-items").then((res) => {
        this.items = res.data.map((item) => {
          return {
            ...item,
            isSaved: true,
          };
        });
        this.isLoading = false;
      });
    },
    toggleSaved(id) {
      this.items = this.items.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            isSaved: !item.isSaved,
          };
        }
        return item;
      });
      this.updateSavedItems(id);
    },
    updateSavedItems(itemId) {
      axios.put(`individual`, { itemId: itemId }).then(() => {});
    },
  },
};
</script>
