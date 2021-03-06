<template>
  <div class="flex justify-center w-full bg-white min-height my-5 xs:my-3">
    <div class="max-width w-5/6 flex flex-col items-center pt-5 xs:w-full">
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
              v-bind:src="initialImage"
            />
            <div v-else>
              <div class="w-full flex flex-col items-center">
                <croppa
                  v-model="previewImage"
                  :initial-image="initialImage"
                  remove-button-color="black"
                ></croppa>
                <div class="underline cursor-pointer pt-2" @click="uploadImage">
                  Save Image
                </div>
                <div v-if="imageError" class="text-red-500">
                  No new image
                </div>
                <div v-if="imageSuccess" class="text-green-500">
                  Saved
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start">
            <div class="flex justify-between px-10 w-full pt-5 items-start">
              <div v-if="!isEditingName" class="flex items-start pb-3">
                <h2 class="text-2xl">
                  {{ item.name }}
                </h2>
                <div v-if="isAbleToEdit" class="text-accent-medium px-5 pt-1">
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
                class="pt-1"
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
            <div class="px-10 w-full mt-3 mb-5">
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
              <hr class="w-full" />
              <div class="mb-5 mt-3">
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
              <hr class="w-full" />
              <div class="mb-5 mt-3">
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
              <hr class="w-full" />
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
              <button
                class="text-xl pl-2 pt-3 underline text-accent-dark"
                @click="selectStore"
              >
                {{ store.name }}
              </button>
            </div>
            <div class="flex flex-wrap justify-center w-full">
              <div
                v-for="item in items"
                :key="item._id"
                @click="selectItem(item._id)"
                class="item__other flex flex-col m-5 xs:m-4 cursor-pointer"
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
export default {
  name: "Item",
  components: {
    Loader,
    ButtonEdit,
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
      item: {},
      imageFile: null,
      initialImage: null,
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
      imageError: false,
      imageSuccess: false,
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
        this.initialImage = "data:image/jpeg;base64," + item.images[0].buffer;
      } catch (err) {
        this.error = true;
        this.isLoading = false;
      }
    },
    async getItems() {
      try {
        const {
          data: { items },
        } = await axios.get(
          `items?sortCriterion=0&storeId=${this.item.storeId}&size=4`
        );
        this.items = items.filter((item) => item._id !== this.item._id);
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
    assignImageFile() {
      const input = this.previewImage.$refs.fileInput;
      const file = input.files;

      this.imageFile = file[0];
    },
    editImage() {
      this.isEditingImage = true;
    },
    selectItem(id) {
      this.$router.push("/item/" + id);
      this.getItem(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    selectStore() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.$router.push("/store/" + this.store._id);
    },
    async uploadImage() {
      const isNewImageUploaded =
        this.previewImage.$refs.fileInput.files.length === 1;

      if (!isNewImageUploaded) {
        this.imageError = true;
        this.imageSuccess = false;
        return;
      }

      this.assignImageFile();

      let data = new FormData();
      data.append("images", this.imageFile);

      try {
        await axios.put(`items/${this.$route.params.itemId}`, data);
        this.isEditingImage = false;
        this.imageError = false;
        this.imageSuccess = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
``
