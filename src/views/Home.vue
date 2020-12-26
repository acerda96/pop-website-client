<template>
  <div
    class="fade-in-scroll flex flex-col items-center justify-center my-10 mt-20 xs:mt-0 h-4/6 xs:h-full xs:mt-5"
  >
    <div class="home__main bg-white flex flex-col items-center mb-10">
      <div class="home__title flex flex-col items-center">
        <div class="text-8xl text-center title">Your Local Marketplace</div>
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
