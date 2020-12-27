<template>
  <modal
    name="newStoreModal"
    :clickToClose="false"
    :adaptive="true"
    :scrollable="true"
    :height="700"
  >
    <div class="flex justify-center">
      <div class="w-full flex justify-center">
        <form class="basic-form xs:mx-8 xs:w-full" @submit.prevent="addStore">
          <div class="w-full flex justify-end">
            <Close
              class="cursor-pointer pt-3"
              @click="
                $modal.hide('newStoreModal');
                this.error = false;
              "
            />
          </div>
          <div class="w-full flex flex-col xs:px-1">
            <div class="w-full text-xl xxs:text-sm pt-1">Name</div>
            <input class="pl-2 w-full" type="text" name="name" v-model="name" />
          </div>

          <div class="w-full text-xl xxs:text-sm pt-1 xs:pl-1">Location</div>
          <div class="w-full flex flex-col pb-3 xs:px-1 xs:pb-0 xxs:text-xs">
            <label class="text-accent-dark" for="addressLine1">
              Address Line 1
            </label>
            <input
              class="pl-2"
              type="text"
              name="addressLine1"
              v-model="addressLine1"
            />
          </div>
          <div class="w-full flex flex-col pb-3 xs:px-1 xs:pb-0 xxs:text-xs">
            <label class="text-accent-dark" for="addressLine2">
              Address Line 2
            </label>
            <input
              class="pl-2"
              type="text"
              name="addressLine2"
              v-model="addressLine2"
            />
          </div>
          <div class="w-full flex flex-col pb-3 xs:px-1 xs:pb-0 xxs:text-xs">
            <label class="text-accent-dark" for="postcode"> Postcode </label>
            <input
              class="pl-2"
              type="text"
              name="postcode"
              v-model="postcode"
            />
          </div>
          <div class="w-full flex flex-col pb-3 xs:px-1 xs:pb-0 xxs:text-xs">
            <label class="text-accent-dark" for="city"> City </label>
            <input class="pl-2" type="city" name="city" v-model="city" />
          </div>
          <div class="w-full flex flex-col pb-3 xs:p-1 xxs:text-sm">
            <label
              class="text-left w-full text-xl xxs:text-sm pt-1"
              for="website"
            >
              Website (Optional)</label
            >
            <input
              class="pl-2"
              type="website"
              name="website"
              v-model="website"
            />
          </div>
          <div class="w-full flex flex-col pb-3 xs:p-1">
            <label
              class="text-left w-full text-xl xxs:text-sm pt-1"
              for="description"
            >
              Description
            </label>
            <textarea
              class="pl-1"
              type="text"
              name="description"
              v-model="description"
            />
          </div>
          <div class="flex justify-center py-2">
            <button class="square-btn w-40" type="submit">
              Submit for approval
            </button>
          </div>
          <div class="text-red-700 xxs:text-sm" v-if="error">
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
      name: "",
      description: "",
      addressLine1: "",
      addressLine2: "",
      postcode: "",
      city: "",
      website: "",
      error: null,
    };
  },
  async mounted() {
    this.individual = await setIndividual();
  },
  methods: {
    async addStore() {
      let data = {
        name: this.name,
        description: this.description,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        postcode: this.postcode,
        city: this.city,
        website: this.website,
      };

      const addressObj = {
        address_line_1: this.addressLine1,
        address_line_2: this.addressLine2,
        city: this.city,
        postal_code: this.postcode,
      };

      this.$geocoder.send(addressObj, async (response) => {
        const position = response.results[0].geometry.location;
        data.position = position;

        try {
          const { data: store } = await axios.post("stores", data);
          this.$router.push(`/store/${store._id}`);
        } catch (err) {
          this.error = err.response.data.error;
        }
      });
    },
  },
};
</script>
