<template>
  <div
    class="fade-in-translate flex flex-col items-center justify-center my-10 mt-20 xs:mt-0 h-4/6 xs:h-full xs:mt-5"
  >
    <div class="home__main bg-white flex flex-col items-center mb-10">
      <div class="home__title flex flex-col items-center">
        <div class="text-8xl text-center title">Your Local Marketplace</div>
        <div class="fade-in-translate-slow">
          <div
            class="text-2xl text-center px-2 my-2 xs:my-0 sm:text-lg xs:text-base"
          >
            Find unique pop-up stores
          </div>
          <div
            class="text-2xl text-center px-2 my-2 xs:my-0 sm:text-lg xs:text-base"
          >
            Discover new brands
          </div>
          <div
            class="text-2xl text-center px-2 my-2 xs:my-0 sm:text-lg xs:text-base"
          >
            Support small businesses
          </div>
        </div>
        <button
          class="bg-black text-white text-xl hover:bg-accent-light hover:text-black p-2 px-6 mt-8 uppercase xs:text-xs"
          @click="$router.push('/browse')"
        >
          Browse now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
