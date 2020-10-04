<template>
  <div class="browse-nav">
    <div class="search-container">
      <button class="map-marker">
        <MapMarker />
      </button>
      <input placeholder="City/postcode" class="input" />
    </div>
    <select class="input dropdown" v-model="sortCriterion" @change="onChange">
      <option value disabled>Sort by...</option>
      <option value="0">Recently added</option>
      <option value="1">Price</option>
    </select>
    <select class="input dropdown" v-model="type" @change="onChange">
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

<style lang="scss">
@import "../styles/_variables.scss";
@import "vue-select/src/scss/vue-select.scss";

$input-height: 30px;

.browse-nav {
  button {
    border-radius: 5px;
    border: none;
    margin: 5px;
    height: $input-height;
  }
}

.map-marker {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.input {
  padding: 7px;
  margin: 10px;
  width: 150px;
  border-radius: 5px;
  border: none;
}

.search-container {
  display: flex;
  align-items: center;
  height: $input-height;
}

.browse-nav {
  background-color: rgb(190, 190, 190);
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
@media (max-width: 570px) {
  .search-container {
    margin-left: 90px;
    margin-right: 90px;
  }
}

@media (max-width: 400px) {
  .browse-nav {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: space-evenly;
    justify-content: space-evenly;
  }
  .input {
    padding: 4px;
    width: 120px;
  }
  .dropdown {
    width: 170px;
    margin: 5px;
  }
}
</style>
