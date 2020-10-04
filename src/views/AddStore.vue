<template>
  <div class="add-store">
    <div class="register-outer">
      <form class="register-inner" @submit.prevent="addStore">
        <div class="register-heading">
          Add store
        </div>
        <hr />
        <div class="input-container">
          <label for="name"> Name </label>
          <input type="text" name="name" v-model="name" />
        </div>
        <div class="input-container">
          <label for="description"> Description </label>
          <input type="text" name="description" v-model="description" />
        </div>
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
        <div class="input-container">
          <label for="website"> Website </label>
          <input type="website" name="website" v-model="website" />
        </div>
        <button type="submit">Add store</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddStore",
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
          this.$router.push("/my-stores");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
</style>
