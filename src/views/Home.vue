<template>
  <div id="home">
    <div class="home__title">
      <div class="home__title-txt">Your Local Marketplace</div>
      <router-link to="/browse">
        <BrowseButton />
      </router-link>
    </div>
    <div id="about">
      <div class="home__sub-title">Discover new styles</div>
    </div>
    <div class="home__row">
      <img src="../images/image1.jpg" />
      <div class="home__row-txt-ctn">
        <div class="home__row-txt-title">See what's on sale</div>
        <div class="home__row-txt-desc">
          Find your next favourite shirt or shoes from nearby stores
        </div>
      </div>
    </div>
    <div class="home__row">
      <div class="home__row-txt-ctn">
        <div class="home__row-txt-title">Get directions</div>
        <div class="home__row-txt-desc">
          When you've found your new fit Pop will show you how to get to the
          store
        </div>
      </div>
      <img src="../images/image2.jpg" />
    </div>
    <div class="home__row">
      <img src="../images/image3.jpg" />
      <div class="home__row-txt">
        <div class="home__row-txt-title">Support local businesses</div>
        <div class="home__row-txt-desc">
          All items are sold by independent sellers
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrowseButton from "../components/BrowseButton";

export default {
  name: "Home",
  components: {
    BrowseButton,
  },
};
</script>
