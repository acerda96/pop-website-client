<template>
  <div class="h-full">
    <HeartFilled v-if="isSaved" />
    <HeartOutline v-else />
  </div>
</template>

<script>
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import HeartFilled from "vue-material-design-icons/Heart.vue";

export default {
  name: "SaveIcon",
  props: ["isSaved"],
  components: {
    HeartOutline,
    HeartFilled,
  },
};
</script>
