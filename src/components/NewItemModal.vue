<template>
  <modal
    name="newItemModal"
    :clickToClose="false"
    :adaptive="true"
    :scrollable="true"
    :height="600"
  >
    <div class="flex justify-center items-center">
      <div>
        <form
          class="basic-form"
          @submit.prevent="addItem"
          enctype="multipart/form-data"
        >
          <div class="w-full flex justify-end">
            <Close
              class="cursor-pointer pt-3"
              @click="
                $modal.hide('newItemModal');
                this.error = false;
              "
            />
          </div>
          <div
            class="flex w-full items-start justify-between xs:flex-col xs:items-center mt-16 xs:mt-0"
          >
            <div class="w-full">
              <div class="w-full flex flex-col xs:px-1">
                <div class="w-full text-xl xxs:text-sm pt-1">Name</div>
                <input class="pl-2" type="text" name="name" v-model="name" />
              </div>
              <div class="w-full flex justify-between items-center mt-8">
                <div class="flex flex-col">
                  <label class="text-xl" for="initialQuantity">
                    Quantity
                  </label>
                  <input
                    class="pl-2 basic-form__input--small"
                    style="width: 100px;"
                    type="text"
                    name="initialQuantity"
                    v-model="initialQuantity"
                  />
                </div>
                <div class="flex flex-col ml-5">
                  <label class="text-xl" for="price"> Price </label>
                  <div>
                    £
                    <input
                      class="pl-2 basic-form__input--small"
                      style="width: 100px;"
                      type="price"
                      name="price"
                      v-model="price"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col relative items-center ml-5 mt-6">
              <input
                class="pl-2 border-0"
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
          </div>
          <div class="flex flex-col w-full mt-8">
            <label class="text-xl" for="description"> Description </label>
            <textarea
              class="description pl-1"
              type="text"
              name="description"
              v-model="description"
            />
          </div>
          <div class="flex justify-center pt-3">
            <button class="square-btn w-40" type="submit">
              Submit for approval
            </button>
          </div>
          <div class="text-red-700" v-if="error">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import axios from "axios";
import setIndividual from "@/lib/individual";
import Close from "vue-material-design-icons/Close.vue";

export default {
  name: "NewStoreModal",
  components: {
    Close,
  },
  data() {
    return {
      individual: {},
      previewImage: null,
      image: null,
      name: "",
      description: "",
      initialQuantity: "",
      price: "",
      error: false,
    };
  },
  async mounted() {
    this.individual = await setIndividual();
  },
  methods: {
    async addItem() {
      if (!this.image) {
        this.error = "Please add an image";
        return;
      }
      let values = {
        name: this.name,
        description: this.description,
        initialQuantity: this.initialQuantity,
        price: this.price,
      };

      let data = new FormData();
      data.append("images", this.image);

      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });

      data.append("storeId", this.$route.params.storeId);

      try {
        await axios.post("items", data);

        this.previewImage = null;
        this.image = null;
        this.name = "";
        this.description = "";
        this.initialQuantity = "";
        this.price = "";
        this.error = false;

        this.$modal.hide("newItemModal");
        this.$emit("getItems");
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
    pickFile() {
      const input = this.$refs.fileInput;
      const file = input.files;

      this.image = file[0];
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
      }
    },
  },
};
</script>
