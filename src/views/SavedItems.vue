<template>
  <div
    class="fade-in flex justify-center bg-white min-height my-5 xs:w-full xs:my-3"
  >
    <div class="max-width flex  w-5/6 flex-col items-center">
      <h2 class="text-3xl text-center py-3">Saved Items</h2>
      <hr class="w-full" />
      <div class="flex justify-center">
        <Loader v-if="isLoading" />
        <div v-if="!isLoading" class="flex justify-center flex-wrap fade-in">
          <div
            class="browse__item flex flex-col m-4 cursor-pointer items-center"
            v-for="item in items"
            :key="item._id"
          >
            <router-link :to="'/item/' + item._id">
              <img
                class="browse__item-thumbnail"
                v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
              />
            </router-link>
            <div class="flex items-end text-black justify-between w-full pt-1">
              <div>
                <div>{{ truncateName(item.name) }}</div>
                <div>£{{ item.price }}</div>
              </div>
              <SaveIcon
                :isSaved="item.isSaved"
                @click.native="toggleSaved(item._id)"
              />
            </div>
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
import setIndividual from "@/lib/individual";
import { truncateName } from "@/lib/helpers";

export default {
  name: "SavedItems",
  components: { Loader, SaveIcon },
  data() {
    return {
      isLoading: true,
      individual: {},
      items: [],
      truncateName: truncateName,
    };
  },
  async mounted() {
    this.individual = await setIndividual();
    this.getSavedItems();
  },
  methods: {
    async getSavedItems() {
      try {
        const { data } = await axios.get("individual/saved-items");
        this.items = data.map((item) => {
          return {
            ...item,
            isSaved: true,
          };
        });
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
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
    async updateSavedItems(itemId) {
      try {
        await axios.put(`individual`, { itemId: itemId });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
