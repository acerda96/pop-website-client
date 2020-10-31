<template>
  <div class="fl-cn">
    <div class="my-store">
      <h2>{{ store.name }}</h2>
      <hr style="width:50%" />
      <p>{{ store.description }}</p>
      <router-link :to="'/my-stores/' + this.$route.params.storeId + '/add'">
        <button class="rounded-btn">Add item</button>
      </router-link>
      <Loader v-if="isItemsLoading" />
      <div class="items-container" v-if="!isItemsLoading">
        <div class="item" v-for="item in items" :key="item.id">
          <router-link :to="'/my-stores/' + store._id + '/' + item._id">
            <div class="item-heading">
              {{ item.name }}
            </div>
            <img
              class="item-thumbnail"
              v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "MyStore",
  components: {
    Loader,
  },
  data() {
    return {
      isItemsLoading: true,
      individual: {},
      store: [],
      items: [],
    };
  },
  async mounted() {
    await this.setIndividual();
    this.getStore();
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
    getStore() {
      axios
        .get(`api/stores/${this.$route.params.storeId}`)
        .then((res) => {
          this.store = res.data;
        })
        .catch((err) => console.log(err));
    },
    getItems() {
      axios
        .get(
          `api/items?sortCriterion=0&type=0&storeId=${this.$route.params.storeId}`
        )
        .then((res) => {
          this.items = res.data;
          this.isItemsLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
