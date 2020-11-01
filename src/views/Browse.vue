<template>
  <div class="browse">
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
            <HeartIcon
              :isSaved="item.isSaved"
              @click.native="toggleSaved(item._id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BrowseNav from "../components/BrowseNav";
import HeartIcon from "../components/HeartIcon";
import Loader from "../components/Loader.vue";

export default {
  name: "Browse",
  components: { BrowseNav, HeartIcon, Loader },
  data() {
    return {
      isLoading: true,
      individual: {},
      items: [],
    };
  },
  async mounted() {
    await this.setIndividual();
    this.getItems();
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
    getItems() {
      axios
        .get("api/items")
        .then((res) => {
          this.items = this.parseSaved(res.data);
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    parseSaved(items) {
      const savedItems = this.individual.savedItems;
      return items.map((item) => {
        return {
          ...item,
          isSaved: savedItems.some((savedId) => savedId === item._id),
        };
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
      axios
        .put(`api/individual`, { itemId: itemId })
        .then(() => {})
        .catch((err) => console.log(err));
    },
    search(sortCriterion, type) {
      this.isLoading = true;
      axios
        .get(`api/items?sortCriterion=${sortCriterion}&type=${type}`)
        .then((res) => {
          this.items = this.parseSaved(res.data);
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
