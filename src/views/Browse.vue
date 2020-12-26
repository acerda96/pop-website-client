<template>
  <div class="bg-white w-full">
    <BrowseNav @getItems="getItems" class="z-10" />
    <div class="flex flex-col items-center mt-24 xs:mt-12">
      <Loader v-if="isLoading" />
      <div v-if="!isLoading" class="browse__items fade-in">
        <div
          class="browse__item fade-in\ z-0"
          v-for="item in items"
          :key="item._id"
        >
          <router-link :to="'/item/' + item._id">
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
      <div v-if="!isLoading && items.length == 0">No items to display</div>
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
    const sortCriterion = 1;
    this.getItems(sortCriterion);
  },
  methods: {
    async getItems(sortCriterion) {
      this.isLoading = true;
      const { lat, lng } = await this.$getLocation({});

      const { data } = await axios.get(
        `items?latitude=${lat}&longitude=${lng}&sortCriterion=${sortCriterion}`
      );

      if (this.isLoggedIn) {
        this.items = this.markSaved(data);
      } else {
        this.items = data;
      }
      this.isLoading = false;
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
    async updateSavedItems(itemId) {
      try {
        await axios.put(`individual`, { itemId });
        this.toggleSaved(itemId);
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
    },
  },
};
</script>
