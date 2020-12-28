<template>
  <div class="bg-white w-full">
    <BrowseNavigation @getItems="getItems" class="z-10" />
    <div class="flex flex-col items-center mt-16 xs:mt-12 mx-24">
      <Loader v-if="isLoading" class="pt-10" />
      <div v-if="!isLoading" class="flex justify-center flex-wrap fade-in pt-8">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BrowseNavigation from "@/components/BrowseNavigation";
import SaveIcon from "@/components/SaveIcon";
import Loader from "@/components/Loader.vue";
import setIndividual from "@/lib/individual";

export default {
  name: "Browse",
  components: { BrowseNavigation, SaveIcon, Loader },
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
    const sortCriterion = 0;
    this.getItems(sortCriterion);
  },
  methods: {
    async getItems(sortCriterion) {
      this.isLoading = true;
      let latitude, longitude;

      try {
        const currentPosition = await this.$getLocation({});
        latitude = currentPosition.lat;
        longitude = currentPosition.lng;
      } catch (err) {
        console.log(err);
      }

      try {
        const { data } = await axios.get(
          `items?latitude=${latitude}&longitude=${longitude}&sortCriterion=${sortCriterion}`
        );

        if (this.isLoggedIn) {
          this.items = this.markSaved(data);
        } else {
          this.items = data;
        }
      } catch (err) {
        console.log("Browse error", err);
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
