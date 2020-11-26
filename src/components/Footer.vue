<template>
  <div class="footer">
    <ul class="footer__links">
      <li>
        <router-link to="/contact">
          <div class="footer__link">
            <div class="footer__link-txt">Contact Us</div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/"
          ><div class="footer__link">
            <a
              class="footer__link-txt"
              href="https://twitter.com/Pop_Marketplace"
            >
              Follow Us
            </a>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/privacy">
          <div class="footer__link">
            <div class="footer__link-txt">Privacy Policy</div>
          </div></router-link
        >
      </li>
    </ul>
    <div class="copyright-icon"><Copyright />Pop Marketplace</div>
  </div>
</template>

<script>
import Copyright from "vue-material-design-icons/Copyright.vue";

export default {
  name: "Footer",
  components: { Copyright },
};
</script>
