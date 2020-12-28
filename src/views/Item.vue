<template>
  <div class="flex justify-center">
    <div
      class="max-width bg-white w-5/6 flex flex-col items-center my-5 py-5 pt-5 xs:my-3 xs:w-full"
    >
      <div v-if="error">Item not found</div>
      <Loader v-if="isLoading" />
      <div
        class="w-full h-full flex flex-col fade-in justify-between"
        v-if="!isLoading && !error"
      >
        <div>
          <div class="flex justify-center">
            <img
              v-if="!isAbleToEdit"
              class="item__thumbnail"
              v-bind:src="previewImage"
            />
            <div v-else>
              <div class="w-full flex flex-col relative items-center">
                <input
                  class="pl-2 item__image-edit border-0"
                  ref="fileInput"
                  type="file"
                  @change="pickFile"
                />
                <div>
                  <img class="item__thumbnail" v-bind:src="previewImage" />
                </div>
              </div>
              <div v-if="isEditingImage" class="mt-3 flex justify-around">
                <button class="underline" @click="cancelImageEdit">
                  <Close />
                </button>
                <button class="underline" @click="uploadImage">
                  <Check />
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start">
            <div class="flex justify-between px-10 w-full pt-5 items-start">
              <div v-if="!isEditingName" class="flex items-start pb-3">
                <h2 class="text-2xl">
                  {{ item.name }}
                </h2>
                <div
                  v-if="isAbleToEdit"
                  class="text-accent-medium px-5 pt-1 xs:pt-0"
                >
                  {{ statusText }}
                </div>
              </div>
              <form
                v-else
                class="w-full"
                @submit.prevent="putItem(item, 'isEditingName')"
              >
                <input
                  v-model="item.name"
                  class="border border-accent-dark pl-2 w-4/6 xs:w-full mt-4"
                />
              </form>
              <ButtonEdit
                class="pt-1 xs:pt-0"
                v-if="isAbleToEdit"
                :document="item"
                :fields="['name']"
                fieldName="isEditingName"
                :isEditing.sync="isEditingName"
                @callback="putItem"
                @toggleEdit="toggleEdit"
              />
            </div>
            <hr class="w-full" />
            <div class="px-10 w-full mt-3">
              <div class="mb-5">
                <div class="flex items-center justify-between">
                  <h4 class="text-xl">
                    Description
                  </h4>
                  <ButtonEdit
                    v-if="isAbleToEdit"
                    :document="item"
                    :fields="['description']"
                    fieldName="isEditingDescription"
                    :isEditing.sync="isEditingDescription"
                    @callback="putItem"
                    @toggleEdit="toggleEdit"
                  />
                </div>
                <p v-if="!isEditingDescription">
                  {{ item.description }}
                </p>
                <textarea
                  v-else
                  v-model="item.description"
                  class="border border-accent-dark pl-1 w-full"
                />
              </div>
              <div class="mb-5">
                <div class="flex justify-between items-center">
                  <h4 class="text-xl pr-5">Price</h4>
                  <ButtonEdit
                    v-if="isAbleToEdit"
                    :document="item"
                    :fields="['price']"
                    fieldName="isEditingPrice"
                    :isEditing.sync="isEditingPrice"
                    @callback="putItem"
                    @toggleEdit="toggleEdit"
                  />
                </div>
                <p v-if="!isEditingPrice">£{{ item.price }}</p>
                <form v-else @submit.prevent="putItem(item, 'isEditingPrice')">
                  £<input
                    v-model="item.price"
                    class="border border-accent-dark pl-2 ml-1"
                  />
                </form>
              </div>
              <div class="mb-5">
                <div class="flex justify-between items-center">
                  <h4 class="text-xl pr-5">
                    Initial quantity
                  </h4>
                  <ButtonEdit
                    v-if="isAbleToEdit"
                    :document="item"
                    :fields="['initialQuantity']"
                    fieldName="isEditingQuantity"
                    :isEditing.sync="isEditingQuantity"
                    @callback="putItem"
                    @toggleEdit="toggleEdit"
                  />
                </div>
                <p v-if="!isEditingQuantity">{{ item.initialQuantity }}</p>
                <form
                  v-else
                  @submit.prevent="putItem(item, 'isEditingQuantity')"
                >
                  <input
                    v-model="item.initialQuantity"
                    class="border border-accent-dark pl-2"
                  />
                </form>
              </div>
            </div>
          </div>
          <div
            v-if="items.length > 0"
            class="flex flex-col items-center w-full"
          >
            <div class="flex">
              <div class="text-xl pt-3 text-accent-dark">
                Other items by
              </div>
              <router-link
                class="text-xl pl-2 pt-3 underline text-accent-dark"
                :to="'/store/' + store._id"
              >
                {{ store.name }}
              </router-link>
            </div>
            <div class="flex flex-wrap justify-center w-full">
              <div
                v-for="item in items"
                :key="item._id"
                @click="selectItem(item._id)"
                class="item__other flex flex-col m-5 cursor-pointer"
              >
                <img
                  class="item__other-thumbnail"
                  v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
                />
                <div>£{{ item.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="items.length == 0" class="flex justify-center">
          <div class="text-lg pt-3 italic h-full">Hosted by</div>
          <router-link
            class="text-lg pl-5 pt-3 hover:underline italic"
            :to="'/store/' + store._id"
          >
            {{ store.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";
import setIndividual from "@/lib/individual";
import ButtonEdit from "@/components/ButtonEdit.vue";
import Close from "vue-material-design-icons/Close.vue";
import Check from "vue-material-design-icons/Check.vue";

export default {
  name: "Item",
  components: {
    Loader,
    ButtonEdit,
    Close,
    Check,
  },
  computed: {
    isLoggedIn: function() {
      return !!this.$store.getters.token;
    },
    statusText: function() {
      if (this.isAbleToEdit) {
        return this.item.status === "approved"
          ? "Approved"
          : "Pending approval";
      } else {
        return null;
      }
    },
  },
  data() {
    return {
      isLoading: true,
      individual: {},
      isBrowsePage: this.$route.name === "browse-item",
      item: {},
      imageFile: null,
      previewImage: null,
      items: [],
      store: {},
      error: false,
      isAbleToEdit: false,
      isEditingName: false,
      isEditingDescription: false,
      isEditingPrice: false,
      isEditingQuantity: false,
      isEditingImage: false,
    };
  },
  async mounted() {
    if (this.isLoggedIn) {
      this.individual = await setIndividual();
    }
    await this.getItem();
    await this.getItems();
  },
  methods: {
    async getItem() {
      try {
        const { data: item } = await axios.get(
          `items/${this.$route.params.itemId}`
        );
        this.item = item;
        const { data: store } = await axios.get(`stores/${this.item.storeId}`);
        this.store = store;
        this.isAbleToEdit = this.individual._id === item.userId;
        this.previewImage = "data:image/jpeg;base64," + item.images[0].buffer;
      } catch (err) {
        this.error = true;
        this.isLoading = false;
      }
    },
    async getItems() {
      try {
        const { data } = await axios.get(
          `items?sortCriterion=1&storeId=${this.item.storeId}`
        );
        this.items = data
          .filter((item) => item._id !== this.item._id)
          .slice(0, 4);
        this.isLoading = false;
      } catch {
        this.isLoading = false;
      }
    },
    toggleEdit(field, val) {
      this[field] = val;
    },
    async putItem(data, field) {
      try {
        await axios.put(`items/${this.$route.params.itemId}`, data);
        this.toggleEdit(field, false);
        await this.getItem();
      } catch (err) {
        console.log(err);
      }
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;

      this.imageFile = file[0];
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
          this.isEditingImage = true;
        };
        reader.readAsDataURL(file[0]);
      }
    },
    cancelImageEdit() {
      const originalImage =
        "data:image/jpeg;base64," + this.item.images[0].buffer;
      this.$refs.fileInput.value = "";
      this.previewImage = originalImage;
      this.imageFile = originalImage;
      this.isEditingImage = false;
    },
    selectItem(id) {
      this.$router.push("/item/" + id);
      this.getItem(id);
      window.scrollTo(0, 0);
    },
    async uploadImage() {
      let data = new FormData();
      data.append("images", this.imageFile);

      try {
        await axios.put(`items/${this.$route.params.itemId}`, data);
        this.isEditingImage = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
``
