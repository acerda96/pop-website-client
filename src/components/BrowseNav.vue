<template>
  <div class="bg-accent-dark fixed w-full mt-6 xs:mt-0">
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
        <option value="0">Nearest first</option>
        <option value="1">Recently added</option>
        <option value="2">Price</option>
      </select>
    </div>
  </div>
</template>

<script>
import MapMarker from "vue-material-design-icons/MapMarker.vue";
import Map from "@/components/Map";

export default {
  name: "BrowseNav",
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
      this.$emit("search", this.sortCriterion);
    },
  },
};
</script>
