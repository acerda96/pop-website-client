<template>
  <div class="my-store">
    <h2>{{ store.name }}</h2>
    <p>{{ store.description }}</p>
    <button>Add item</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyStoreItems",
  data() {
    return {
      individual: {},
      store: [],
    };
  },
  async mounted() {
    await this.setIndividual();
    this.getStore();
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
        .get(`api/stores/${this.$route.params.id}`)
        .then((res) => {
          console.log(res.data);
          this.store = res.data;
        })
        .catch((err) => console.log(err));
    },
    getItems() {
      axios
        .get(`api/stores/${this.$route.params.id}`)
        .then((res) => {
          console.log(res.data);
          this.store = res.data;
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
</style>
