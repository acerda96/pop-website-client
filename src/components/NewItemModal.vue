<template>
  <modal
    name="newItemModal"
    :clickToClose="false"
    :adaptive="true"
    :scrollable="true"
    :height="600"
  >
    <div class="flex justify-center items-center pt-5">
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
          <div class="basic-form__sub-ctn">
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
              <div>
                £
                <input
                  class="basic-form__input--small"
                  style="width: 100px;"
                  type="unitPrice"
                  name="unitPrice"
                  v-model="unitPrice"
                />
              </div>
            </div>
          </div>
          <div class="basic-form__input-ctn--large">
            <label for="description"> Description </label>
            <textarea
              class="description"
              type="text"
              name="description"
              v-model="description"
            />
          </div>
          <div class="add__image-preview">
            <input
              class="border-0"
              ref="fileInput"
              type="file"
              @input="pickFile"
            />
            <div class="add__image-ctn">
              <img
                v-if="previewImage"
                class="add__image-thumbnail"
                v-bind:src="previewImage"
              />
            </div>
          </div>
          <div class="add__buttons-ctn">
            <button class="square-btn" type="submit">Add item</button>
            <button class="square-btn" @click="$modal.hide('newItemModal')">
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
import setIndividual from "@/lib/individual";

export default {
  name: "NewStoreModal",
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
    this.individual = await setIndividual();
  },
  methods: {
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

      axios.post("items", data).then(() => {
        this.$modal.hide("newItemModal");
        this.$emit("getItems");
      });
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
