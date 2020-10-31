<template>
  <div class="fl-cn">
    <div>
      <form
        class="basic-form"
        @submit.prevent="addItem"
        enctype="multipart/form-data"
      >
        <input
          class="add__heading-input"
          type="text"
          name="name"
          v-model="name"
          placeholder="Item name"
        />
        <div class="basic-form__input-ctn">
          <label for="description"> Description </label>
          <textarea
            class="description"
            type="text"
            name="description"
            v-model="description"
          />
        </div>
        <div class="fl-cn">
          <div class="basic-form__input-ctn">
            <label for="initialQuantity"> Quantity </label>
            <input
              class="basic-form__input--small"
              style="width: 100px;"
              type="text"
              name="initialQuantity"
              v-model="initialQuantity"
            />
          </div>
          <div class="basic-form__input-ctn">
            <label for="unitPrice"> Price </label>
            <input
              class="basic-form__input--small"
              style="width: 100px;"
              type="unitPrice"
              name="unitPrice"
              v-model="unitPrice"
            />
          </div>
        </div>
        <div class="basic-form__input-ctn">
          <label for="type"> Type </label>
          <select
            style="padding: 8px; border: none; border-radius: 5px;"
            v-model="type"
            @change="onChange"
          >
            <option value disabled>Select a type</option>
            <option value="1">Bottoms</option>
            <option value="2">Dresses</option>
            <option value="3">Jewellery</option>
            <option value="4">Shoes</option>
            <option value="5">Tops</option>
          </select>
        </div>
        <div class="add__image-preview">
          <input ref="fileInput" type="file" @input="pickFile" />
          <img
            v-if="previewImage"
            class="item-thumbnail"
            v-bind:src="this.previewImage"
          />
        </div>
        <div class="add__buttons-ctn">
          <button class="rounded-btn" @click="navigateToItems">Back</button>
          <button class="rounded-btn" type="submit">Add item</button>
        </div>
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
    navigateToItems() {
      this.$router.push(`/my-stores/${this.$route.params.storeId}`);
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
          this.navigateToItems();
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
