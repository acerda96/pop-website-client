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
            class="flex w-full items-start justify-between xs:flex-col xs:items-center xs:mt-0"
          >
            <div class="w-full">
              <div>
                <div class="flex justify-center w-full">
                  <croppa
                    v-model="previewImage"
                    remove-button-color="black"
                  ></croppa>
                </div>
              </div>
              <div class="w-full flex flex-col xs:px-1 pt-2 mb-8">
                <div class="w-full text-xl xxs:text-sm pt-1">Name</div>
                <input class="pl-2" type="text" name="name" v-model="name" />
              </div>
              <div class="flex flex-col w-full mb-8">
                <label class="text-xl xxs:text-sm" for="description">
                  Description
                </label>
                <textarea
                  class="description pl-1"
                  type="text"
                  name="description"
                  v-model="description"
                />
              </div>
              <div class="w-full flex justify-between items-center mb-3">
                <div class="flex flex-col">
                  <label class="text-xl xxs:text-sm" for="initialQuantity">
                    Quantity
                  </label>
                  <input
                    class="pl-2 self-center w-10"
                    style="width: 100px;"
                    type="text"
                    name="initialQuantity"
                    v-model="initialQuantity"
                  />
                </div>
                <div class="flex flex-col ml-5">
                  <label class="text-xl xxs:text-sm" for="price"> Price </label>
                  <div>
                    £
                    <input
                      class="pl-2 self-center w-10"
                      style="width: 100px;"
                      type="price"
                      name="price"
                      v-model="price"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center pt-2">
            <button class="square-btn w-40 xxs:text-sm" type="submit">
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
  name: "StoreNew",
  components: {
    Close,
  },
  data() {
    return {
      individual: {},
      previewImage: null,
      imageFile: null,
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
      this.assignImageFile();

      if (!this.imageFile) {
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
      data.append("images", this.imageFile);

      Object.keys(values).forEach((key) => {
        data.append(key, values[key]);
      });

      data.append("storeId", this.$route.params.storeId);

      try {
        await axios.post("items", data);

        this.previewImage = null;
        this.imageFile = null;
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
    assignImageFile() {
      const input = this.previewImage.$refs.fileInput;
      const file = input.files;

      this.imageFile = file[0];
    },
  },
};
</script>
