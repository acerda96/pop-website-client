<template>
  <div class="add-store">
    <div class="register-outer">
      <form
        class="register-inner"
        @submit.prevent="addItem"
        enctype="multipart/form-data"
      >
        <div class="register-heading">
          Add item
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
          <label for="initialQuantity"> Initial Quantity </label>
          <input type="text" name="initialQuantity" v-model="initialQuantity" />
        </div>
        <div class="input-container">
          <label for="type"> Type </label>
          <input type="text" name="type" v-model="type" />
        </div>
        <div class="input-container">
          <label for="unitPrice"> Price </label>
          <input type="unitPrice" name="unitPrice" v-model="unitPrice" />
        </div>
        <img
          v-if="previewImage"
          class="item-thumbnail"
          v-bind:src="this.previewImage"
        />
        <input ref="fileInput" type="file" @input="pickFile" />
        <button type="submit">Add item</button>
      </form>
    </div>
  </div>
</template>
<!-- v-bind:src="'data:image/jpeg;base64,' + image.buffer" -->

<script>
import axios from "axios";

export default {
  name: "AddStore",
  data() {
    return {
      individual: {},
      previewImage: null,
      image: {},
      name: "",
      description: "",
      initialQuantity: "",
      type: "",
      unitPrice: "",
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
    addItem() {
      let values = {
        name: this.name,
        description: this.description,
        initialQuantity: this.initialQuantity,
        type: this.type,
        unitPrice: this.unitPrice,
      };

      let data = new FormData();
      data.append("images", this.image);

      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });

      data.append("storeId", this.$route.params.storeId);

      axios
        .post("api/items", data)
        .then(() => {
          this.$router.push(`/my-stores/${this.$route.params.storeId}`);
        })
        .catch((err) => console.log(err));
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;

      this.image = file[0];
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.imagePreviewWrapper {
  width: 150px;
  height: 150px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>
