<template>
  <div>
    <div class="upper-navbar">
      <MenuIcon class="upper-navbar__menu-icon" @click="toggleNav" />
      <router-link class="upper-navbar__logo" to="/">POP</router-link>
      <ul class="upper-navbar__items">
        <li @click="scrollMeTo" v-if="!isLoggedIn">
          <router-link to="/#about" class="upper-navbar__link"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/browse" class="upper-navbar__link"
            >Browse</router-link
          >
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/app" class="upper-navbar__link">Host</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login" class="upper-navbar__link"
            >Login</router-link
          >
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/sign-up" class="upper-navbar__link"
            >Sign up</router-link
          >
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/app" class="upper-navbar__link"
            >Saved items</router-link
          >
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/my-stores" class="upper-navbar__link"
            >My Stores</router-link
          >
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/app" class="upper-navbar__link"
            >Account</router-link
          >
        </li>
        <li>
          <span v-if="isLoggedIn">
            <a class="upper-navbar__link" @click="logout">Log out</a>
          </span>
        </li>
      </ul>
    </div>
    <ul class="side-nav" ref="nav">
      <li
        @click="
          scrollMeTo();
          hideNav();
        "
        v-if="!isLoggedIn"
      >
        <router-link to="/#about" class="upper-navbar__link">About</router-link>
      </li>

      <li @click="hideNav">
        <router-link to="/browse" class="upper-navbar__link"
          >Browse</router-link
        >
      </li>

      <li @click="hideNav" v-if="!isLoggedIn">
        <router-link to="/app" class="upper-navbar__link">Host</router-link>
      </li>

      <li @click="hideNav" v-if="!isLoggedIn">
        <router-link to="/login" class="upper-navbar__link">Login</router-link>
      </li>

      <li @click="hideNav" v-if="!isLoggedIn">
        <router-link to="/sign-up" class="upper-navbar__link"
          >Sign up</router-link
        >
      </li>

      <li @click="hideNav" v-if="isLoggedIn">
        <router-link to="/app" class="upper-navbar__link"
          >Saved items</router-link
        >
      </li>

      <li @click="hideNav" v-if="isLoggedIn">
        <router-link to="/my-stores" class="upper-navbar__link"
          >My Stores</router-link
        >
      </li>

      <li @click="hideNav" v-if="isLoggedIn">
        <router-link to="/app" class="upper-navbar__link">Account</router-link>
      </li>
      <li
        @click="
          hideNav();
          logout();
        "
        v-if="isLoggedIn"
      >
        <router-link to="/sign-up" class="upper-navbar__link"
          >Log out</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "NavBar",
  components: {
    MenuIcon,
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    hideNav() {
      const nav = this.$refs.nav.classList;
      nav.remove("active");
    },
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
    scrollMeTo() {
      if (this.$route.fullPath === "/#about") {
        let el = document.getElementById("about");
        let top = el.offsetTop;

        window.scrollTo(0, top - 100);
      }
    },
  },
};
</script>
