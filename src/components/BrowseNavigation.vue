<template>
  <div class="bg-white border-t border-b border-accent-light fixed w-full py-1">
    <Map />
    <div class="w-full flex justify-between px-8 tems-center flex-wrap xs:px-4">
      <div class="flex">
        <button class="pr-2">
          <MapMarker
            class="text-accent-dark cursor-pointer"
            @click="$modal.show('mapModal')"
          />
        </button>
      </div>
      <select
        class="bg-white m-2 border border-accent-light px-5"
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
