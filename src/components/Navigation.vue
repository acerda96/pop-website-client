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
    <nav class="side-navbar z-20" ref="nav" v-click-outside="hideNav">
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
import { links } from "@/lib/navigationLinks";
import Vue from "vue";

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    this.event = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", this.event);
  },
  unbind: function() {
    document.body.removeEventListener("click", this.event);
  },
});

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
      console.log("toggle nav", nav.contains("active"), nav);

      nav.contains("active") ? nav.remove("active") : nav.add("active");
      console.log("after toggle nav", nav.contains("active"), nav);
    },
    hideNav() {
      console.log("hiding nav");
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
    "click-outside": {
      bind: function(el, binding, vnode) {
        console.log("BINDING", el);

        window.event = function(event) {
          console.log("classlist", el.classList);
          console.log(
            "target",
            event.target.className.animVal === "material-design-icon__svg"
          );

          const isToggleButton =
            event.target.className.animVal === "material-design-icon__svg";

          const hasClickedOnElement = el == event.target;
          const isClickedOnChild = el.contains(event.target);
          const isNavBarOpen = el.classList.contains("active");

          console.log("isToggleButton", isToggleButton);
          console.log("isNavBarOpen", isNavBarOpen);

          if (
            !(hasClickedOnElement || isClickedOnChild) &&
            isNavBarOpen &&
            !isToggleButton
          ) {
            console.log("calling", binding.expression);
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", window.event);
      },
      unbind: function() {
        console.log("UNBINDING");
        document.body.removeEventListener("click", window.event);
      },
    },
  },
};
</script>
