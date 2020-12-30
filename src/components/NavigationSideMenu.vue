<template>
  <nav
    class="side-navbar z-20"
    :class="isNavOpen ? 'active' : ''"
    v-click-outside-side-nav="hideNav"
  >
    <ul>
      <div v-for="link in links" :key="link.name">
        <li
          v-if="isLoggedIn == link.requiresLogin || link.alwaysShow"
          @click="
            $emit('toggleNav');
            $emit('handleLinkClick', link.name);
          "
        >
          <div
            @click="$emit('selectNavItem', link.to)"
            class="upper-navbar__link uppercase cursor-pointer text-white"
          >
            {{ link.title }}
          </div>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationSideMenu",
  props: ["isLoggedIn", "links", "isNavOpen"],
  methods: {
    hideNav() {
      this.$emit("setIsNavOpen", false);
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
