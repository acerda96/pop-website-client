<template>
  <div class="browse">
    <h2 style="padding-left:30px;">Saved Items</h2>
    <hr style="width:90%;" />
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
import Loader from "../components/Loader.vue";
import HeartIcon from "../components/HeartIcon";

export default {
  name: "SavedItems",
  components: { Loader, HeartIcon },
  data() {
    return {
      isLoading: true,
      individual: {},
      items: [],
    };
  },
  async mounted() {
    await this.setIndividual();
    this.getSavedItems();
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
    getSavedItems() {
      axios
        .get("api/individual/saved-items")
        .then((res) => {
          this.items = res.data.map((item) => {
            return {
              ...item,
              isSaved: true,
            };
          });
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
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
  },
};
</script>
