<template>
  <div>
    <nav class="upper-navbar">
      <MenuIcon class="upper-navbar__menu-icon" @click="toggleNav" />
      <router-link class="upper-navbar__logo" to="/">POP</router-link>
      <ul class="upper-navbar__items">
        <div v-for="link in links" :key="link.name">
          <li
            v-if="isLoggedIn == link.requiresLogin || link.alwaysShow"
            :class="getActive($route.name)"
            @click="onClick(link.name)"
          >
            <router-link :to="link.to" class="upper-navbar__link uppercase">{{
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
              toggleNav();
              onClick(link.name);
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
import { links } from "@/nav-links";

export default {
  name: "Navigation",
  components: {
    MenuIcon,
  },
  data() {
    return {
      links: links,
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
    getActive(name) {
      switch (name) {
        case "saved":
          return "text-gray";
      }
    },
    onClick(name) {
      switch (name) {
        case "logout":
          this.logout();
          break;
        case "about":
          this.scrollTo();
          break;
        default:
          return;
      }
    },
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    scrollTo() {
      if (this.$route.fullPath === "/#about") {
        let el = document.getElementById("about");
        let top = el.offsetTop;

        window.scrollTo(0, top - 100);
      }
    },
  },
};
</script>
