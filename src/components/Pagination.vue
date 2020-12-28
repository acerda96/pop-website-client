<template>
  <div class="my-5">
    <div class="flex items-center">
      <ChevronLeft :class="getClasses('L')" @click="getPreviousPage" />
      <div class="px-2">Page</div>
      <div class="px-2">{{ page + 1 }}</div>
      <ChevronRight :class="getClasses('R')" @click="getNextPage" />
    </div>
  </div>
</template>

<script>
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

const RESULTS_PER_PAGE = 20;

export default {
  name: "Pagination",
  components: { ChevronLeft, ChevronRight },
  props: ["page", "totalResults"],
  methods: {
    getNextPage() {
      if (this.page < this.totalResults / RESULTS_PER_PAGE - 1) {
        this.$emit("getItems", this.$route.query.sortCriterion, this.page + 1);
      }
    },
    getPreviousPage() {
      if (this.page > 0) {
        this.$emit("getItems", this.$route.query.sortCriterion, this.page - 1);
      }
    },
    getClasses(chevron) {
      if (
        (this.page == 0 && chevron === "L") ||
        (this.page == Math.ceil(this.totalResults / RESULTS_PER_PAGE - 1) &&
          chevron === "R")
      ) {
        return "text-accent-light";
      }
      return "text-accent-dark cursor-pointer";
    },
  },
};
</script>
