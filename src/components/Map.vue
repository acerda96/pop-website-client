<template>
  <modal
    name="mapModal"
    :clickToClose="true"
    :adaptive="true"
    :scrollable="true"
    :height="700"
  >
    <div class="flex flex-col items-center">
      <div class="w-full flex justify-between items-center">
        <h2 class="text-3xl pl-4 py-2">Find stores</h2>
        <Close class="pr-4 cursor-pointer" @click="$modal.hide('mapModal')" />
      </div>
      <GmapMap
        :center="
          currentPosition
            ? { lat: currentPosition.lat, lng: currentPosition.lng }
            : { lat: 51.509865, lng: -0.118092 }
        "
        :zoom="8"
        map-type-id="terrain"
        class="map"
      >
        <GmapMarker
          v-if="currentPosition"
          :position="currentPosition"
          :clickable="true"
          icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        />
        <div v-for="store in stores" :key="store._id">
          <GmapMarker
            :position="store.position"
            :clickable="true"
            @click="viewStore(store)"
            icon="http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
          />
        </div>
      </GmapMap>
      <p class="pt-2">Click a pin to view a store's details</p>
      <div class="flex justify-between w-full px-10">
        <div class="flex flex-col">
          <div class="text-xl">
            {{ previewingStore.name }}
          </div>
          <div class="flex flex-col">
            <div v-if="previewingStore.addressLine1">
              {{ previewingStore.addressLine1 }},
            </div>
            <div v-if="previewingStore.addressLine2">
              {{ previewingStore.addressLine2 }},
            </div>
            <div v-if="previewingStore.city">{{ previewingStore.city }},</div>
            <div v-if="previewingStore.postcode">
              {{ previewingStore.postcode }}
            </div>
            <a class="pt-5 underline" :href="previewingStore.website">
              {{ previewingStore.website }}
            </a>
          </div>
        </div>
        <router-link
          v-if="previewingStore.name"
          class="underline"
          :to="'/store/' + previewingStore._id"
        >
          View Store
        </router-link>
      </div>
    </div>
  </modal>
</template>

<script>
import axios from "axios";
import Close from "vue-material-design-icons/Close.vue";

export default {
  name: "Map",
  components: {
    Close,
  },
  data() {
    return {
      currentPosition: {
        lat: 0,
        lng: 0,
      },
      stores: [],
      previewingStore: {
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postcode: "",
      },
    };
  },
  async created() {
    this.getStores();
  },
  methods: {
    async getStores() {
      const { data: stores } = await axios.get("stores");
      const pushStore = (store) => this.stores.push(store);

      try {
        const currentPosition = await this.$getLocation({});
        this.currentPosition = currentPosition;
      } catch {
        this.currentPosition = null;
      }

      stores.forEach((store) => {
        const addressObj = {
          address_line_1: store.addressLine1,
          address_line_2: store.addressLine2,
          city: store.city,
          postal_code: store.postcode,
        };
        try {
          this.$geocoder.send(addressObj, async (response) => {
            const position = response.results[0].geometry.location;
            pushStore({
              ...store,
              position,
            });
          });
        } catch (err) {
          console.log("Geocoder error", err);
        }
      });
    },
    viewStore(store) {
      this.previewingStore = store;
    },
  },
};
</script>
