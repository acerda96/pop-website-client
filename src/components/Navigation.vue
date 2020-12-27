<template>
  <div>
    <nav class="upper-navbar z-10">
      <MenuIcon class="upper-navbar__menu-icon" @click="toggleNav" />
      <router-link class="upper-navbar__logo" to="/">POP</router-link>
      <ul class="upper-navbar__items">
        <div v-for="link in links" :key="link.name">
          <li
            v-if="isLoggedIn == link.requiresLogin || link.alwaysShow"
            @click="handleLinkClick(link.name)"
          >
            <router-link :to="link.to" class="upper-navbar__link uppercase">{{
              link.title
            }}</router-link>
          </li>
        </div>
      </ul>
    </nav>
    <nav class="side-navbar z-20" ref="nav" v-click-outside-side-nav="hideNav">
      <ul>
        <div v-for="link in links" :key="link.name">
          <li
            v-if="isLoggedIn == link.requiresLogin || link.alwaysShow"
            @click="
              toggleNav();
              handleLinkClick(link.name);
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
import { links } from "@/lib/navigationLinks";

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
      return !!this.$store.getters.token;
    },
  },
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;

      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
    hideNav() {
      const nav = this.$refs.nav.classList;
      nav.remove("active");
    },
    async handleLinkClick(name) {
      if (name === "logout") {
        await this.$store.dispatch("logout");
      }
    },
  },
  directives: {
    "click-outside-side-nav": {
      bind: function(el, binding, vnode) {
        window.event = function(event) {
          try {
            const isToggleButton =
              (event.target.className.animVal &&
                event.target.className.animVal ===
                  "material-design-icon__svg") ||
              (event.target.firstChild.textContent &&
                event.target.firstChild.textContent) == "Menu Icon";
            const hasClickedOnElement = el == event.target;
            const isClickedOnChild = el.contains(event.target);
            const isNavBarOpen = el.classList.contains("active");

            if (
              !(hasClickedOnElement || isClickedOnChild) &&
              isNavBarOpen &&
              !isToggleButton
            ) {
              vnode.context[binding.expression](event);
            }
          } catch (err) {
            console.log(err);
          }
        };
        document.body.addEventListener("click", window.event);
      },
    },
  },
};
</script>
