<template>
  <div
    class="fade-in-translate flex flex-col items-center justify-center my-10 xs:mt-0 h-4/6 xs:h-full xs:my-5"
  >
    <div class="home__main flex flex-col items-center">
      <div class="home__title flex flex-col items-center">
        <div class="text-center title">Your Local Marketplace</div>
        <div class="fade-in-translate-slow mt-5">
          <div class="home__sub-title text-center px-2 my-2">
            Find unique pop-up stores
          </div>
          <div class="home__sub-title text-center px-2 my-2">
            Discover new brands
          </div>
          <div class="home__sub-title text-center px-2 my-2">
            Support small businesses
          </div>
        </div>
        <button
          class="bg-black text-white text-xl hover:bg-accent-light hover:text-black p-2 px-6 mt-10 uppercase md:text-lg"
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
