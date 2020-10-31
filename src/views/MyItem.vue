<template>
  <div class="fl-cn">
    <div class="my-item-ctn">
      <Loader v-if="isLoading" />
      <div class="my-store__details" v-if="!isLoading">
        <h2>{{ item.name }}</h2>
        <hr style="width:50%" />
        <p>{{ item.description }}</p>
        <img
          class="my-store__item-thumbnail"
          v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "MyItem",
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: true,
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
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
