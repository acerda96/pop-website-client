<template>
  <div class="my-store">
    <h2>{{ store.name }}</h2>
    <hr />
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
          console.log("ITEMS", this.items[0].images);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/abstracts/_variables.scss";

.my-store {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

button {
  cursor: pointer;
}

.item {
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  cursor: pointer;
}

.item-thumbnail {
  width: 200px;
  height: 200px;
}

.item-heading {
  text-align: left;
  padding: 7px;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
