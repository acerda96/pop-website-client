<template>
  <div class="browse-nav">
    <div class="search-container">
      <button class="map-marker">
        <MapMarker />
      </button>
      <input placeholder="City/postcode" class="input" />
    </div>
    <select class="input dropdown">
      <option value disabled selected>Sort by...</option>
      <option>Price</option>
      <option>Recently added</option>
    </select>
    <select class="input dropdown">
      <option value disabled selected>Filter by...</option>
      <option>Bottoms</option>
      <option>Dresses</option>
      <option>Jewellery</option>
      <option>Shoes</option>
      <option>Tops</option>
    </select>
    <button>Search</button>
  </div>
</template>

<script>
import MapMarker from "vue-material-design-icons/MapMarker.vue";
import Vue from "vue";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

export default {
  name: "BrowseNav",
  components: {
    MapMarker,
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
