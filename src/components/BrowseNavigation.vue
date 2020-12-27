<template>
  <div class="bg-accent-dark fixed w-full">
    <Map />
    <div class="browse-nav">
      <div class="flex">
        <button class="map-marker pr-2">
          <MapMarker
            class="text-accent-light"
            @click="$modal.show('mapModal')"
          />
        </button>
      </div>
      <select
        class="filter dropdown "
        v-model="sortCriterion"
        @change="onChange"
      >
        <option value disabled>Sort by...</option>
        <option value="0">Recently added</option>
        <option value="1">Price</option>
        <option value="2">Nearest first</option>
      </select>
    </div>
  </div>
</template>

<script>
import MapMarker from "vue-material-design-icons/MapMarker.vue";
import Map from "@/components/Map";

export default {
  name: "BrowseNavigation",
  components: {
    MapMarker,
    Map,
  },

  data() {
    return {
      sortCriterion: 0,
      searchTerm: "",
    };
  },
  methods: {
    onChange() {
      this.$emit("getItems", this.sortCriterion);
    },
  },
};
</script>
