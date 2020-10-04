<template>
  <div class="my-stores">
    <div class="stores">
      <div class="store" v-for="store in stores" :key="store.id">
        <router-link :to="'/my-stores/' + store._id">
          {{ store.name }}
        </router-link>
      </div>
    </div>
    <router-link to="/add-store">
      <button>Add store</button>
    </router-link>
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
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  a {
    color: black;
  }
}

.my-stores {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  button {
    padding: 5px;
    cursor: pointer;
  }
}

.stores {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
}
</style>
