<template>
  <div class="browse">
    <BrowseNav @search="search" />
    <p v-if="isItemsLoading">Loading items...</p>
    <div v-if="!isItemsLoading" class="items-container">
      <div class="item" v-for="item in items" :key="item._id">
        <router-link :to="'/browse/' + item._id">
          <div>
            {{ item.name }}
            {{ "£" + item.unitPrice }}
          </div>
          <img
            class="item-thumbnail"
            v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BrowseNav from "../components/BrowseNav";
import axios from "axios";

export default {
  name: "Browse",
  components: { BrowseNav },
  data() {
    return {
      isItemsLoading: true,
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
          this.items = res.data;
          this.isItemsLoading = false;
        })
        .catch((err) => console.log(err));
    },
    search(sortCriterion, type) {
      this.isItemsLoading = true;
      axios
        .get(`api/items?sortCriterion=${sortCriterion}&type=${type}`)
        .then((res) => {
          this.items = res.data;
          this.isItemsLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.browse {
  background: white;
  min-height: 500px;

  p {
    text-align: center;
  }
}
</style>
