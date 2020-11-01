<template>
  <div class="fl-cn">
    <div class="item-ctn">
      <div class="item__main">
        <Loader v-if="isLoading" />
        <img
          class="item__thumbnail"
          v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
        />
        <div class="item__desc" v-if="!isLoading">
          <div class="item__title">
            <h2>{{ item.name }}, £{{ item.unitPrice }}</h2>
            <button v-if="isBrowsePage" class="square-btn">Edit</button>
          </div>
          <hr style="width:100%" />
          <div class="item__details">
            <h4>Description</h4>
            <p>{{ item.description }}</p>
            <h4>Initial quantity</h4>
            <p>{{ item.initialQuantity }}</p>
          </div>
        </div>
      </div>
      <div class="item__other">
        <h4>Other items from the same store</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "Item",
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: true,
      individual: {},
      isBrowsePage: this.$route.name === "browse-item",
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
      console.log(this.$route);
      axios
        .get(`api/items/${this.$route.params.itemId}`)
        .then((res) => {
          this.item = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
