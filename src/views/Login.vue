<template>
  <div class="fade-in flex justify-center mt-5 pt-5">
    <div>
      <form class="basic-form" @submit.prevent="login">
        <div class="basic-form__heading">
          Welcome back!
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
        <div class="w-full flex flex-col items-center justify-around">
          <button type="submit" class="square-btn">Login</button>
          <router-link to="/sign-up">Don't have an account?</router-link>
        </div>
        <div class="mt-5 text-red-700" v-if="error">
          Your email or password is incorrect
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
      error: false,
    };
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => {
          this.error = false;
          this.$router.push("/browse");
        })
        .catch(() => (this.error = true));
    },
  },
};
</script>
