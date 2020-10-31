<template>
  <div class="loader">
    <div class="circle a"></div>
    <div class="circle b"></div>
    <div class="circle c"></div>
    <div class="circle d"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss">
@import "../styles/abstracts/_variables.scss";

.loader {
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    animation-name: loading;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
  }
}

@keyframes loading {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(-1);
  }
}

.a {
  animation-delay: 0ms;
}
.b {
  animation-delay: 100ms;
}
.c {
  animation-delay: 200ms;
}
.d {
  animation-delay: 300ms;
}

</style>
