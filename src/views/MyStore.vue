<template>
  <div class="my-store">
    <h2>{{ store.name }}</h2>
    <p>{{ store.description }}</p>
    <button>Add item</button>
    <p v-if="isItemsLoading">Loading items...</p>
    <div class="items-container">
      <div class="item" v-for="item in items" :key="item.id">
        <router-link :to="'/my-stores/' + store._id + '/' + item._id">
          <div>
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

export default {
  name: "MyStore",
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

<style lang="scss">
@import "../styles/_variables.scss";

.my-store {
  background: white;
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

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
