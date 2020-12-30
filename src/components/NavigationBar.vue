<template>
  <nav class="upper-navbar z-10">
    <MenuIcon class="upper-navbar__menu-icon" @click="$emit('toggleNav')" />
    <router-link class="upper-navbar__logo" to="/">POP</router-link>
    <ul class="upper-navbar__items">
      <div v-for="link in links" :key="link.name">
        <li
          v-if="isLoggedIn == link.requiresLogin || link.alwaysShow"
          @click="$emit('handleLinkClick', link.name)"
        >
          <div
            @click="$emit('selectNavItem', link.to)"
            class="upper-navbar__link uppercase cursor-pointer"
          >
            {{ link.title }}
          </div>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "NavigationBar",
  props: ["isLoggedIn", "links"],
  components: {
    MenuIcon,
  },
};
</script>
