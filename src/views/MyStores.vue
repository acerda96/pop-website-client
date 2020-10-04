<template>
  <div class="my-stores">
    <a class="store" v-for="store in stores" :key="store.id">
      {{ store.name }}
    </a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyStores",
  data() {
    return {
      individual: {},
      stores: [],
    };
  },
  async mounted() {
    await this.setIndividual();
    this.getStores();
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
    getStores() {
      axios
        .get(`api/stores?userId=${this.individual._id}`)
        .then((res) => {
          this.stores = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.store {
  background: white;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
}

.my-stores {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
