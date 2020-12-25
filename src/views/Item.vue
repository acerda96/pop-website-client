<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col items-center my-10 pt-10 bg-white w-4/6 xs:w-full"
    >
      <Loader v-if="isLoading" />
      <div class="w-full" v-if="!isLoading">
        <div class="flex justify-around">
          <img
            class="item__thumbnail"
            v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
          />
        </div>
        <div class="flex flex-col items-center">
          <div class="flex p-2">
            <h2 class="text-2xl">{{ item.name }}, £{{ item.unitPrice }}</h2>
          </div>
          <hr class="w-full" />
          <div class="pl-10 w-full">
            <h4 class="text-xl">Description</h4>
            <p class="mb-2">{{ item.description }}</p>
            <h4 class="text-xl">Initial quantity</h4>
            <p>{{ item.initialQuantity }}</p>
          </div>
        </div>
        <div class="mt-10 flex justify-center">
          <h4 class="text-xl">Other items from the same store</h4>
        </div>
      </div>

      <div></div>
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
    };
  },
  async mounted() {
    if (this.isLoggedIn) {
      this.individual = setIndividual();
    }
    this.getItem();
  },
  methods: {
    getItem() {
      axios.get(`items/${this.$route.params.itemId}`).then((res) => {
        this.item = res.data;
        this.isLoading = false;
      });
    },
  },
};
</script>
``
