<template>
  <modal
    name="newStoreModal"
    :clickToClose="false"
    :adaptive="true"
    :scrollable="true"
    :height="700"
  >
    <div class="flex justify-center">
      <div>
        <form class="basic-form" @submit.prevent="addStore">
          <input
            class="add__heading-input"
            type="text"
            name="name"
            v-model="name"
            placeholder="Store name"
          />

          <div class="basic-form__input-ctn--large ">
            <label for="addressLine1"> Address Line 1 </label>
            <input type="text" name="addressLine1" v-model="addressLine1" />
          </div>
          <div class="basic-form__input-ctn--large ">
            <label for="addressLine2"> Address Line 2 </label>
            <input type="text" name="addressLine2" v-model="addressLine2" />
          </div>
          <div class="basic-form__input-ctn--large ">
            <label for="postcode"> Postcode </label>
            <input type="text" name="postcode" v-model="postcode" />
          </div>
          <div class="basic-form__input-ctn--large ">
            <label for="city"> City </label>
            <input type="city" name="city" v-model="city" />
          </div>
          <div class="basic-form__input-ctn--large ">
            <label for="website"> Website </label>
            <input type="website" name="website" v-model="website" />
          </div>
          <div class="basic-form__input-ctn--large ">
            <label for="description"> Description </label>
            <textarea type="text" name="description" v-model="description" />
          </div>
          <div class="add__buttons-ctn">
            <button class="square-btn" type="submit">Add store</button>
            <button class="square-btn" @click="$modal.hide('newStoreModal')">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import axios from "axios";
import setIndividual from "@/utils/individual";

export default {
  name: "NewStoreModal",
  data() {
    return {
      individual: {},
      name: "",
      description: "",
      addressLine1: "",
      addressLine2: "",
      postcode: "",
      city: "",
      website: "",
    };
  },
  async mounted() {
    this.individual = await setIndividual();
  },
  methods: {
    setIndividual() {
      axios.get("individual").then((res) => {
        this.individual = res.data;
      });
    },
    addStore() {
      let data = {
        name: this.name,
        description: this.description,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        postcode: this.postcode,
        city: this.city,
        website: this.website,
      };
      axios.post("stores", data).then((res) => {
        console.log("RESR", res);
        this.$router.push(`/stores/${res.data._id}`);
      });
    },
  },
};
</script>
