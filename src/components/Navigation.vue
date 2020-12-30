<template>
  <div>
    <NavigationBar
      :isLoggedIn="isLoggedIn"
      :links="links"
      @toggleNav="toggleNav"
      @handleLinkClick="handleLinkClick"
      @selectNavItem="selectNavItem"
    />
    <NavigationSideMenu
      :isLoggedIn="isLoggedIn"
      :links="links"
      :isNavOpen="isNavOpen"
      @setIsNavOpen="setIsNavOpen"
      @toggleNav="toggleNav"
      @handleLinkClick="handleLinkClick"
      @selectNavItem="selectNavItem"
    />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import NavigationSideMenu from "@/components/NavigationSideMenu";
import { links } from "@/lib/navigationLinks";

export default {
  name: "Navigation",
  components: {
    NavigationBar,
    NavigationSideMenu,
  },
  data() {
    return {
      links: links,
      isNavOpen: false,
    };
  },
  computed: {
    isLoggedIn: function() {
      return !!this.$store.getters.token;
    },
  },
  methods: {
    setIsNavOpen(value) {
      this.isNavOpen = value;
    },
    toggleNav() {
      this.setIsNavOpen(!this.isNavOpen);
    },
    async handleLinkClick(name) {
      if (name === "logout") {
        await this.$store.dispatch("logout");
      }
    },
    selectNavItem(route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.$router.push(route);
    },
  },
};
</script>
