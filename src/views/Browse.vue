<template>
  <div class="bg-white w-full my-4">
    <BrowseNav @search="search" />
    <div class="browse__body">
      <Loader v-if="isLoading" />
      <div v-if="!isLoading" class="browse__items">
        <div class="browse__item" v-for="item in items" :key="item._id">
          <router-link :to="'/browse/' + item._id">
            <img
              class="browse__item-thumbnail"
              v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
            />
          </router-link>
          <div class="browse__item-details">
            {{ item.name }}
            {{ "£" + item.unitPrice }}
            <SaveIcon
              :isSaved="item.isSaved"
              @click.native="updateSavedItems(item._id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BrowseNav from "@/components/BrowseNav";
import SaveIcon from "@/components/SaveIcon";
import Loader from "@/components/Loader.vue";
import setIndividual from "@/utils/individual";

export default {
  name: "Browse",
  components: { BrowseNav, SaveIcon, Loader },
  data() {
    return {
      isLoading: true,
      individual: {},
      items: [],
    };
  },
  async mounted() {
    this.individual = await setIndividual();
    this.getItems();
  },
  methods: {
    getItems() {
      axios.get("api/items").then((res) => {
        this.items = this.markSaved(res.data);
        this.isLoading = false;
      });
    },
    markSaved(items) {
      const savedItems = this.individual.savedItems;
      return items.map((item) => {
        return {
          ...item,
          isSaved: savedItems.some((savedId) => savedId === item._id),
        };
      });
    },
    updateSavedItems(itemId) {
      axios.put(`api/individual`, { itemId }).then(() => {
        this.toggleSaved(itemId);
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
    },
    search(sortCriterion, type) {
      this.isLoading = true;
      axios
        .get(`api/items?sortCriterion=${sortCriterion}&type=${type}`)
        .then((res) => {
          this.items = this.markSaved(res.data);
          this.isLoading = false;
        });
    },
  },
};
</script>
