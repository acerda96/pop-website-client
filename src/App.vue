<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
};
</script>

<style lang="scss">
@import "./styles/_variables.scss";

body {
  margin: 0;
  // background-image: url("./images/background.jpg");
  background-color: rgb(219, 184, 204);
  background-attachment: fixed;
  font-family: $main-font;
  background-size: 100%;
  scroll-padding-top: 50px;
  width: 100%;
  height: 100%;
}
html {
  width: 100%;
  height: 100%;
}

button {
  font-family: $main-font;
}

input {
  font-family: $main-font;
}

#app {
  min-height: 100%;
  display: grid;
  grid-template-areas:
    "nav"
    "main"
    "footer";
  grid-template-rows: $nav-bar-height 1fr auto;
  grid-template-columns: 100%;
}

.submit-btn {
  background-color: $sub-accent-color;
  width: 100px;
  border: none;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  font-family: $main-font;
  color: white;
  align-self: center;
}

@media (max-width: 800px) {
  #app {
    grid-template-rows: $nav-bar-height-mobile 1fr auto;
  }
}
</style>
