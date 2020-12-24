<template>
  <div class="bg-white">
    <div class="flex justify-center h-full pt-4">
      <div class="h-full w-full flex items-center justify-around">
        <div class="h-full pl-2 flex flex-col items-center">
          <router-link to="/privacy">
            <div class="underline xxs:text-sm">Privacy</div>
          </router-link>
        </div>
        <div class="h-full flex flex-col items-center px-2">
          <div class="flex items-center">
            <div>©</div>
            <div class="xxs:text-sm text-center">Pop Marketplace</div>
          </div>
          <div class="flex items-center justify-center pt-1">
            <a
              class="underline xxs:text-sm text-gray-600 "
              href="https://twitter.com/Pop_Marketplace"
            >
              <Twitter :size="20" class="icon" />
            </a>
          </div>
        </div>

        <div class="h-full pr-2 flex flex-col items-center">
          <router-link to="/contact">
            <div class="underline xxs:text-sm">Contact Us</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Twitter from "vue-material-design-icons/Twitter.vue";

export default {
  name: "Footer",
  components: { Twitter },
};
</script>
