<template>
  <div class="my-stores">
    <div class="stores" v-if="!isLoading">
      <div class="store" v-for="store in stores" :key="store.id">
        <router-link :to="'/my-stores/' + store._id">
          {{ store.name }}, {{ store.city }}
        </router-link>
      </div>
    </div>
    <router-link to="/add-store" v-if="!isLoading">
      <button class="rounded-btn">Add store</button>
    </router-link>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "MyStores",
  data() {
    return {
      individual: {},
      stores: [],
      isLoading: null,
    };
  },
  components: {
    Loader,
  },
  async mounted() {
    this.isLoading = true;
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
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/abstracts/_variables.scss";

.store {
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  width: 200px;
  height: 150px;
  text-align: center;
  cursor: pointer;
  a {
    color: black;
  }
  box-shadow: 0 8px 6px -6px black;
  display: flex;
  align-items: flex-end;
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

textarea {
  border: none;
  border-radius: 5px;
}
</style>
