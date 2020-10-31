<template>
  <div class="my-item">
    <h2>{{ item.name }}</h2>
    <p>{{ item.description }}</p>
    <p v-if="isItemLoading">Loading...</p>
    <img
      v-if="!isItemLoading"
      class="item-thumbnail"
      v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
    />
    <button>Edit item</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyItem",
  data() {
    return {
      isItemLoading: true,
      individual: {},
      item: {},
    };
  },
  async mounted() {
    await this.setIndividual();
    this.getItem();
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
    getItem() {
      axios
        .get(`api/items/${this.$route.params.itemId}`)
        .then((res) => {
          this.item = res.data;
          this.isItemLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/abstracts/_variables.scss";

.my-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 500px;
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
