<template>
  <div>
    <nav class="upper-navbar">
      <MenuIcon class="upper-navbar__menu-icon" @click="toggleNav" />
      <router-link class="upper-navbar__logo" to="/">POP</router-link>
      <ul class="upper-navbar__items">
        <div v-for="link in links" :key="link.name">
          <li
            v-if="isLoggedIn == link.requiresLogin || link.alwaysShow"
            @click="executeClick(link.name)"
          >
            <router-link :to="link.to" class="upper-navbar__link">{{
              link.title
            }}</router-link>
          </li>
        </div>
      </ul>
    </nav>
    <nav class="side-navbar" ref="nav">
      <ul>
        <div v-for="link in links" :key="link.name">
          <li
            v-if="isLoggedIn == link.requiresLogin || link.alwaysShow"
            @click="
              hideNav();
              executeClick(link.name);
            "
          >
            <router-link :to="link.to" class="upper-navbar__link">{{
              link.title
            }}</router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { links } from "../nav-links";

export default {
  name: "NavBar",
  data() {
    return {
      links: links,
    };
  },
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
    executeClick(name) {
      switch (name) {
        case "logout":
          this.logout();
          break;
        case "about":
          this.scrollMeTo();
          break;
        default:
          return;
      }
    },
  },
};
</script>
