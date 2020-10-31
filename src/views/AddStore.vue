<template>
  <div class="fl-cn">
    <div>
      <form class="basic-form" @submit.prevent="addStore">
        <input
          class="add__heading-input"
          type="text"
          name="name"
          v-model="name"
          placeholder="Store name"
        />
        <div class="basic-form__input-ctn">
          <label for="description"> Description </label>
          <textarea type="text" name="description" v-model="description" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="website"> Website </label>
          <input type="website" name="website" v-model="website" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="street"> Street </label>
          <input type="text" name="street" v-model="street" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="postcode"> Postcode </label>
          <input type="text" name="postcode" v-model="postcode" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="city"> City </label>
          <input type="city" name="city" v-model="city" />
        </div>
        <div class="add__buttons-ctn">
          <button class="rounded-btn" @click="navigateToStores">Back</button>
          <button class="rounded-btn" type="submit">Add store</button>
        </div>
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
