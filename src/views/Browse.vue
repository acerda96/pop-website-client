<template>
  <div class="bg-white w-full">
    <BrowseNav @search="search" class="z-10" />
    <div class="flex justify-center mt-24">
      <Loader v-if="isLoading" />
      <div v-if="!isLoading" class="browse__items">
        <div
          class="browse__item fade-in\ z-0"
          v-for="item in items"
          :key="item._id"
        >
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
              @click.native="updateSavedItems(item._id)"
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
import BrowseNav from "@/components/BrowseNav";
import SaveIcon from "@/components/SaveIcon";
import Loader from "@/components/Loader.vue";
import setIndividual from "@/lib/individual";

export default {
  name: "Browse",
  components: { BrowseNav, SaveIcon, Loader },
  computed: {
    isLoggedIn: function() {
      return !!this.$store.getters.token;
    },
  },
  data() {
    return {
      isLoading: true,
      individual: {},
      items: [],
    };
  },
  async mounted() {
    if (this.isLoggedIn) {
      this.individual = await setIndividual();
    }
    this.getItems();
  },
  methods: {
    getItems() {
      axios.get("items").then((res) => {
        if (this.isLoggedIn) {
          this.items = this.markSaved(res.data);
        } else {
          this.items = res.data;
        }
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
      axios.put(`individual`, { itemId }).then(() => {
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
    search(sortCriterion) {
      this.isLoading = true;
      axios.get(`items?sortCriterion=${sortCriterion}`).then((res) => {
        this.items = this.markSaved(res.data);
        this.isLoading = false;
      });
    },
  },
};
</script>
