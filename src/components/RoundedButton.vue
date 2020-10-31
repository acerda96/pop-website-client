<template>
  <div class="rounded-btn-container">
    <div class="rounded-btn-inner">
      <div class="rounded-btn">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundedButton",
  props: ['title', 'method']
};
</script>

<style lang="scss">
@import "../styles/abstracts/_variables.scss";

.rounded-btn-container{ 
  background: white;
  color: black;
  border: 2px solid black;
  border-radius: 15px;
  padding: 8px;
  box-shadow: 0 3px 2px -2px rgb(99, 99, 99);
  width: 100px;
  text-align: center;

 cursor: pointer;
}


</style>
