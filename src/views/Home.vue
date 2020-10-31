<template>
  <div id="home">
    <div class="page-container">
      <div class="title-container">
        <Title />
        <router-link to="/app">
          <BrowseButton />
        </router-link>
      </div>
    </div>
    <div id="about">
      <div class="sub-heading-text">Discover new styles</div>
    </div>
    <div class="sec">
      <img src="../images/image1.jpg" />
      <div class="text-container">
        <div class="main-text">See what's on sale</div>
        <div class="sub-text">
          Find your next favourite shirt or shoes from nearby stores
        </div>
      </div>
    </div>
    <div class="sec">
      <div class="text-container">
        <div class="main-text">Get directions</div>
        <div class="sub-text">
          When you've found your new fit Pop will show you how to get to the
          store
        </div>
      </div>
      <img src="../images/image2.jpg" />
    </div>
    <div class="sec">
      <img src="../images/image3.jpg" />
      <div class="text-container">
        <div class="main-text">Support local businesses</div>
        <div class="sub-text">All items are sold by independent sellers</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title";
import BrowseButton from "../components/BrowseButton";

export default {
  name: "Home",
  components: {
    Title,
    BrowseButton,
  },
};
</script>
