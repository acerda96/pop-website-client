<template>
  <div class="bg-accent-dark fixed w-full mt-6 xs:mt-0">
    <div class="browse-nav">
      <div class="flex">
        <button class="map-marker">
          <MapMarker class="text-accent-light" />
        </button>
        <input placeholder="City/postcode" class="pl-2" />
        <button class="bg-white border px-3 border border-accent-dark ml-2">
          Search
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
      </select>
    </div>
  </div>
</template>

<script>
import MapMarker from "vue-material-design-icons/MapMarker.vue";

export default {
  name: "BrowseNav",
  components: {
    MapMarker,
  },

  data() {
    return {
      sortCriterion: 0,
    };
  },
  methods: {
    onChange() {
      this.$emit("search", this.sortCriterion);
    },
  },
};
</script>
