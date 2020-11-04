<template>
  <div class="flex justify-center">
    <div>
      <form class="basic-form" @submit.prevent="login">
        <div class="basic-form__heading">
          Login
        </div>
        <hr />
        <div class="basic-form__input-ctn--large">
          <label for="email"> Email </label>
          <input type="email" name="email" v-model="email" />
        </div>
        <div class="basic-form__input-ctn--large">
          <label for="password"> Password </label>
          <input type="password" name="password" v-model="password" />
        </div>
        <button type="submit" class="square-btn">Login</button>
        <div class="basic-form__links">
          <a>Forgotten your password?</a>
          <router-link to="/sign-up"
            >Don't have an account? Sign up now!</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/browse"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
