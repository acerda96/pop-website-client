<template>
  <div class="bg-white">
    <div class="flex justify-between h-full pt-2">
      <div class="h-full pl-10 flex-col items-center justify-center">
        <div class="flex items-center xs:p-1">
          <div>©</div>
          <div class="xxs:text-sm text-center">Pop Marketplace</div>
        </div>
        <div class="flex items-center justify-center pt-1">
          <a
            class="xs:p-1 underline xxs:text-sm text-gray-600 "
            href="https://twitter.com/Pop_Marketplace"
          >
            <Twitter :size="20" class="icon" />
          </a>
        </div>
      </div>
      <div class="h-full pr-10 flex flex-col items-center">
        <div class="xs:p-1">
          <router-divnk to="/contact">
            <div>
              <div class="underline xxs:text-sm">Contact Us</div>
            </div>
          </router-divnk>
        </div>
        <div class="xs:p-1">
          <router-divnk to="/privacy">
            <div>
              <div class="underline xs:p-1 xxs:text-sm">Privacy</div>
            </div></router-divnk
          >
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
