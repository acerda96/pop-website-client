<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col items-center my-10 pt-10 bg-white w-4/6 xs:w-full"
    >
      <div v-if="error">Item not found</div>
      <Loader v-if="isLoading" />
      <div class="w-full" v-if="!isLoading && !error">
        <div class="flex justify-around">
          <img
            class="item__thumbnail"
            v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
          />
        </div>
        <div class="flex flex-col items-center">
          <div class="flex p-2">
            <h2 class="text-2xl">{{ item.name }}</h2>
          </div>
          <hr class="w-full" />
          <div class="px-10 w-full">
            <h4 class="text-xl">Description</h4>
            <p class="mb-2">{{ item.description }}</p>
            <div class="flex justify-between">
              <div>
                <h4 class="text-xl pt-3">Price</h4>
                <p>£{{ item.unitPrice }}</p>
              </div>
              <div>
                <h4 class="text-xl pt-3">Initial quantity</h4>
                <p>{{ item.initialQuantity }}</p>
              </div>
            </div>
            <h4 class="text-xl pt-3">Host</h4>
            <router-link
              :to="'/store/' + store._id"
              class="mb-2 hover:text-accent-medium"
              >{{ store.name }}</router-link
            >
          </div>
        </div>
        <div
          v-if="items.length > 0"
          class="mt-10 flex flex-col items-center w-full"
        >
          <h4 class="text-xl pt-3">Other items from the same store</h4>
          <div class="flex flex-wrap justify-center w-full">
            <router-link
              v-for="item in items"
              :key="item._id"
              :to="'/item/' + item._id"
              class="m-5"
            >
              <img
                class="store__item-thumbnail"
                v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
              />
              <div class="text-center">
                {{ item.name }}
                £{{ item.unitPrice }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";
import setIndividual from "@/lib/individual";

export default {
  name: "Item",
  components: {
    Loader,
  },
  computed: {
    isLoggedIn: function() {
      return !!this.$store.getters.token;
    },
  },
  data() {
    return {
      isLoading: true,
      individual: {},
      isBrowsePage: this.$route.name === "browse-item",
      item: {},
      items: [],
      store: {},
      error: false,
    };
  },
  async mounted() {
    if (this.isLoggedIn) {
      this.individual = setIndividual();
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
      } catch (err) {
        console.log(err);
        this.isLoading = false;
      }
    },
  },
};
</script>
``
