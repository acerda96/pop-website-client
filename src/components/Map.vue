<template>
  <modal
    name="mapModal"
    :clickToClose="true"
    :adaptive="true"
    :scrollable="true"
    :height="600"
  >
    <div class="flex flex-col items-center">
      <div class="w-full">
        <h2 class="text-3xl pl-2 py-2">Find stores</h2>
      </div>
      <GmapMap
        :center="{ lat: currentPosition.lat, lng: currentPosition.lng }"
        :zoom="8"
        map-type-id="terrain"
        class="map"
      >
        <GmapMarker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker"
          :clickable="true"
          @click="center = currentPosition"
        />
      </GmapMap>
    </div>
  </modal>
</template>

<script>
import axios from "axios";

export default {
  name: "Map",
  data() {
    return {
      currentPosition: {
        lat: 0,
        lng: 0,
      },
      stores: [],
      markers: [],
    };
  },
  async created() {
    this.getAllStores();
  },
  methods: {
    getAllStores() {
      axios
        .get("stores")
        .then((res) => {
          this.stores = res.data;
          this.setMarkers();
        })
        .catch(() => {});
    },
    setMarkers() {
      this.$getLocation({}).then((currentPosition) => {
        this.currentPosition = currentPosition;
      });

      const pushMarker = (position) => this.markers.push(position);

      this.stores.forEach((store) => {
        const addressObj = {
          address_line_1: store.addressLine1,
          address_line_2: store.addressLine2,
          city: store.city,
          postal_code: store.postcode,
          country: "United Kingdom",
        };
        this.$geocoder.send(addressObj, async (response) => {
          pushMarker(response.results[0].geometry.location);
        });
      });
    },
  },
};
</script>
