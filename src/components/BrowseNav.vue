<template>
  <div class="browse-nav">
    <div class="browse-nav__location">
      <button class="map-marker">
        <MapMarker />
      </button>
      <input placeholder="City/postcode" class="filter" />
    </div>
    <select class="filter dropdown" v-model="sortCriterion" @change="onChange">
      <option value disabled>Sort by...</option>
      <option value="0">Recently added</option>
      <option value="1">Price</option>
    </select>
    <select class="filter dropdown" v-model="type" @change="onChange">
      <option value disabled>Filter by...</option>
      <option value="0">View All</option>
      <option value="1">Bottoms</option>
      <option value="2">Dresses</option>
      <option value="3">Jewellery</option>
      <option value="4">Shoes</option>
      <option value="5">Tops</option>
    </select>
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
      type: 0,
    };
  },
  methods: {
    onChange() {
      this.$emit("search", this.sortCriterion, this.type);
    },
  },
};
</script>
