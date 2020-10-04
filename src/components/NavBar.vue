<template>
  <div class="navbar">
    <nav class="upper-nav">
      <MenuIcon class="menu-icon" @click="toggleNav" />
      <router-link class="logo" to="/">POP</router-link>
      <ul class="desktop-nav-ul">
        <!-- <li @click="scrollMeTo">
          <router-link to="/#about" class="link">About</router-link>
        </li> -->
        <li>
          <router-link to="/browse" class="link">Browse</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/app" class="link">Host</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login" class="link">Login</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/sign-up-2" class="link">Sign up</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/app" class="link">Saved items</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/my-stores" class="link">My Stores</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/app" class="link">Account</router-link>
        </li>
        <li>
          <span v-if="isLoggedIn">
            <a class="link" @click="logout">Log out</a>
          </span>
        </li>
      </ul>
    </nav>
    <ul class="mobile-nav-ul" ref="nav">
      <!-- <li
        @click="
          scrollMeTo();
          hideNav();
        "
      >
        <router-link to="/#about" class="link">About</router-link>
      </li> -->

      <li @click="hideNav">
        <router-link to="/browse" class="link">Browse</router-link>
      </li>

      <li @click="hideNav" v-if="!isLoggedIn">
        <router-link to="/app" class="link">Host</router-link>
      </li>

      <li @click="hideNav" v-if="!isLoggedIn">
        <router-link to="/login" class="link">Login</router-link>
      </li>

      <li @click="hideNav" v-if="!isLoggedIn">
        <router-link to="/sign-up-2" class="link">Sign up</router-link>
      </li>

      <li @click="hideNav" v-if="isLoggedIn">
        <router-link to="/app" class="link">Saved items</router-link>
      </li>

      <li @click="hideNav" v-if="isLoggedIn">
        <router-link to="/my-stores" class="link">My Stores</router-link>
      </li>

      <li @click="hideNav" v-if="isLoggedIn">
        <router-link to="/app" class="link">Account</router-link>
      </li>
      <li
        @click="
          hideNav();
          logout();
        "
        v-if="isLoggedIn"
      >
        <router-link to="/sign-up-1" class="link">Log out</router-link>
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

<style lang="scss">
@import "../styles/_variables.scss";

.upper-nav {
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: $nav-bar-height;
}
.menu-icon {
  display: none;
  cursor: pointer;
}
.logo {
  color: $main-font-color;
  font-size: 40px;
  padding: 30px 30px 20px 70px;
}
.link {
  color: $main-font-color;
  font-size: 17px;
  cursor: pointer;
  text-decoration: underline;
}
a {
  text-decoration: none;
  padding: 5px;
}
li {
  list-style-type: none;
  padding: 10px 20px;
}
hr {
  width: 150px;
}
.desktop-nav-ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  .link {
    font-size: 14px;
    padding: 0px;
  }
}
.mobile-nav-ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: $sub-accent-color;
  position: fixed;
  transition: 300ms ease all;
  left: -300px;
  top: 90px;
  height: 300px;
  width: 200px;
  a {
    color: white;
  }
  .link {
    color: white;
    font-size: 14px;
  }
  li {
    width: 150px;
    border-bottom: 1px solid white;
  }
}

@media (max-width: 800px) {
  .menu-icon {
    display: block;
    padding: 15px 0px 10px 40px;
  }
  .active {
    left: -30px;
  }
  .upper-nav {
    height: $nav-bar-height-mobile;
  }
  .desktop-nav-ul {
    display: none;
  }
  .logo {
    padding: 10px 25px 0px 0px;
    text-decoration: none;
  }
}
@media (max-width: 550px) {
  .menu-icon {
    display: block;
    padding: 15px 0px 10px 30px;
  }
  .logo {
    font-size: 30px;
    padding: 10px 35px 0px 0px;
  }
}
</style>
