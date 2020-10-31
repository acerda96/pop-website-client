<template>
  <div class="add-store">
    <div class="register-outer">
      <form class="register-inner">
        <div class="header">
          <ChevronLeft class="chevron-left" @click="navigateToStores" />
          <input
            class="store-heading"
            type="text"
            name="name"
            v-model="name"
            placeholder="Store name"
          />
        </div>
        <hr style="width:50%" />
        <div class="col-group">
          <div>
            <div class="input-container">
              <label for="description"> Description </label>
              <textarea
                class="description"
                type="text"
                name="description"
                v-model="description"
              />
            </div>
            <div class="input-container">
              <label for="website"> Website </label>
              <input type="website" name="website" v-model="website" />
            </div>
          </div>
          <div>
            <div class="input-container">
              <label for="street"> Street </label>
              <input type="text" name="street" v-model="street" />
            </div>
            <div class="input-container">
              <label for="postcode"> Postcode </label>
              <input type="text" name="postcode" v-model="postcode" />
            </div>
            <div class="input-container">
              <label for="city"> City </label>
              <input type="city" name="city" v-model="city" />
            </div>
          </div>
        </div>
        <button class="rounded-btn" type="submit">Add store</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

export default {
  name: "AddStore",
  components: {
    ChevronLeft,
  },
  data() {
    return {
      individual: {},
      name: "",
      description: "",
      street: "",
      postcode: "",
      city: "",
      website: "",
    };
  },
  async mounted() {
    await this.setIndividual();
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
    navigateToStores() {
      this.$router.push("/my-stores");
    },
    addStore() {
      let data = {
        name: this.name,
        description: this.description,
        street: this.street,
        postcode: this.postcode,
        city: this.city,
        website: this.website,
      };
      axios
        .post("api/stores", data)
        .then(() => {
          this.navigateToStores();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/abstracts/_variables.scss";

.header {
  display: flex;
  align-items: center;
}

.store-heading {
  border: 1px solid black;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  background: none;
  color: grey;
  width: 100%;
}

.col-group {
  display: flex;
}

textarea {
  width: 200px;
  height: 80px;
}

.chevron-left {
  cursor: pointer;
}

@media (max-width: 800px) {
  .col-group {
    flex-direction: column;
  }
}
</style>
