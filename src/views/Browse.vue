<template>
  <div class="browse">
    <BrowseNav @search="search" />
    <p v-if="isItemsLoading">Loading items...</p>
    <div v-if="!isItemsLoading" class="items-container">
      <div class="item" v-for="item in items" :key="item._id">
        <router-link :to="'/browse/' + item._id">
          <div class="item-details">
            {{ item.name }}
            {{ "£" + item.unitPrice }}
            <HeartOutline />
            <HeartFilled />
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
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import HeartFilled from "vue-material-design-icons/Heart.vue";
import axios from "axios";

export default {
  name: "Browse",
  components: { BrowseNav, HeartOutline, HeartFilled },
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

.item-details {
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-evenly;
}
</style>
