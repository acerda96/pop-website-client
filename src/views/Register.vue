<template>
  <div class="fl-cn">
    <div>
      <form class="basic-form" @submit.prevent="register">
        <div class="basic-form__heading">
          Create your account
        </div>
        <hr />
        <div class="basic-form__input-ctn">
          <label for="name"> Full name </label>
          <input type="text" name="name" v-model="name" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="company"> Company (optional) </label>
          <input type="text" name="company" v-model="company" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="mobileNumber"> Mobile number </label>
          <input type="text" name="mobileNumber" v-model="mobileNumber" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="email"> Email </label>
          <input type="email" name="email" v-model="email" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="password"> Password </label>
          <input type="password" name="password" v-model="password" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="confirmPassword"> Confirm password </label>
          <input
            type="password"
            name="confirmPassword"
            v-model="confirmPassword"
          />
        </div>
        <button class="square-btn" type="submit">Sign up</button>
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
    };
  },
  methods: {
    register: function() {
      let data = {
        email: this.email,
        name: this.name,
        password: this.password,
        confirmPassword: this.confirmPassword,
        mobileNumber: this.mobileNumber,
        company: this.company,
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
