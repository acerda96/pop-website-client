<template>
  <div
    class="fade-in-slow flex flex-col items-center justify-center my-10 xs:mt-0 h-4/6 xs:h-full"
  >
    <div
      class="w-2/4 h-full lg:w-full bg-white flex flex-col items-center mb-10"
    >
      <div class="home__title flex flex-col items-center pt-20 xs:pt-10">
        <div class="text-8xl text-center">Your Local Marketplace</div>
        <div
          class="text-2xl text-center px-2 my-5 xs:my-0 sm:text-lg xs:text-base"
        >
          Discover new brands & support small businesses
        </div>
        <router-link to="/browse">
          <button
            class="bg-black text-white text-xl hover:bg-gray-200 hover:text-black p-2 px-6 uppercase xs:text-xs"
          >
            Browse now
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
