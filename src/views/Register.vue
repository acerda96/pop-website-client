<template>
  <div class="fade-in flex justify-center mt-5 pt-5">
    <div>
      <form class="basic-form" @submit.prevent="register">
        <div class="basic-form__heading">
          Create your account
        </div>
        <hr />
        <div class="w-full flex flex-col p-2">
          <label for="name"> Full name </label>
          <input class="pl-2" type="text" name="name" v-model="name" required />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="company"> Company (optional) </label>
          <input class="pl-2" type="text" name="company" v-model="company" />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="mobileNumber"> Mobile number </label>
          <input
            class="pl-2"
            type="text"
            name="mobileNumber"
            v-model="mobileNumber"
            required
          />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="email"> Email </label>
          <input
            class="pl-2"
            type="email"
            name="email"
            v-model="email"
            required
          />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="password"> Password </label>
          <input
            class="pl-2"
            type="password"
            name="password"
            v-model="password"
            required
          />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="confirmPassword"> Confirm password </label>
          <input
            class="pl-2"
            type="password"
            name="confirmPassword"
            v-model="confirmPassword"
            required
          />
        </div>
        <div class="w-full flex flex-col items-center justify-around">
          <button class="square-btn" type="submit">Sign up</button>
          <router-link to="/login">Already have an account?</router-link>
        </div>
        <div class="mt-5 text-red-700" v-if="error">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      company: "",
      error: false,
    };
  },
  methods: {
    async register() {
      let data = {
        email: this.email,
        name: this.name,
        password: this.password,
        confirmPassword: this.confirmPassword,
        mobileNumber: this.mobileNumber,
        company: this.company,
      };
      await this.$store.dispatch("login", { user: data, isRegister: true });

      this.error = this.$store.getters.authError;
    },
  },
};
</script>
