<template>
  <div class="fade-in bg-white w-full min-height">
    <BrowseNavigation @getItems="getItems" class="z-10" />
    <div class="flex flex-col items-center mt-16 xs:mt-12 mx-24">
      <Loader v-if="isLoading" />
      <div v-if="!isLoading" class="flex flex-col items-center fade-in">
        <Pagination
          :page="currentPage"
          :totalResults="totalResults"
          @getItems="getItems"
        />
        <div class="flex justify-center flex-wrap">
          <div
            class="browse__item flex flex-col m-4 fade-in z-0 xs:my-1"
            v-for="item in items"
            :key="item._id"
          >
            <router-link class="w-full" :to="'/item/' + item._id">
              <img
                class="browse__item-thumbnail"
                v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
              />
            </router-link>
            <div class="flex items-end text-black justify-between w-full pt-1">
              <div>
                <div>
                  {{ truncateName(item.name) }}
                </div>
                <div>£{{ item.price }}</div>
              </div>
              <SaveIcon
                :isSaved="item.isSaved"
                @click.native="updateSavedItems(item._id)"
              />
            </div>
          </div>
        </div>
        <div class="pt-10" v-if="!isLoading && items.length == 0">
          No items to display
        </div>
        <Pagination
          :page="currentPage"
          :totalResults="totalResults"
          @getItems="getItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BrowseNavigation from "@/components/BrowseNavigation";
import SaveIcon from "@/components/SaveIcon";
import Loader from "@/components/Loader.vue";
import Pagination from "@/components/Pagination.vue";
import setIndividual from "@/lib/individual";

export default {
  name: "Browse",
  components: { BrowseNavigation, SaveIcon, Loader, Pagination },
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
      currentPage: 0,
      totalResults: null,
    };
  },
  async mounted() {
    if (this.isLoggedIn) {
      this.individual = await setIndividual();
    }
    const sortCriterion = this.$route.query.sortCriterion;
    const page = Number(this.$route.query.page);
    this.getItems(sortCriterion, page);
  },
  methods: {
    async getItems(sortCriterion, page) {
      this.isLoading = true;

      try {
        const {
          data: { items, totalResults },
        } = await axios.get(
          `items?sortCriterion=${sortCriterion}&page=${page}`
        );

        if (this.isLoggedIn) {
          this.items = this.markSaved(items);
        } else {
          this.items = items;
        }
        this.totalResults = totalResults;
      } catch (err) {
        console.log("Browse error", err);
      }
      this.isLoading = false;

      this.sortCriterion = sortCriterion;
      this.currentPage = page;

      this.$router.push(`browse?sortCriterion=${sortCriterion}&page=${page}`);
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
    truncateName(name) {
      const CUT_OFF = 24;

      if (name.length > CUT_OFF) {
        return name.slice(0, CUT_OFF).trim() + "...";
      }
      return name;
    },
  },
};
</script>
