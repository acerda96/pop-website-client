<template>
  <div class="browse">
    <BrowseNav @search="search" />
    <div class="browse__body">
      <Loader v-if="isLoading" />
      <div v-if="!isLoading" class="browse__items">
        <div class="browse__item" v-for="item in items" :key="item._id">
          <router-link :to="'/browse/' + item._id">
            <div class="browse__item-details">
              {{ item.name }}
              {{ "£" + item.unitPrice }}
              <HeartOutline />
              <HeartFilled />
            </div>
            <img
              class="browse__item-thumbnail"
              v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrowseNav from "../components/BrowseNav";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import HeartFilled from "vue-material-design-icons/Heart.vue";
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "Browse",
  components: { BrowseNav, HeartOutline, HeartFilled, Loader },
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
          this.items = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    search(sortCriterion, type) {
      this.isLoading = true;
      axios
        .get(`api/items?sortCriterion=${sortCriterion}&type=${type}`)
        .then((res) => {
          this.items = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
